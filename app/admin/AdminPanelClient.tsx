"use client";

import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export default function AdminPanelClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    description: "",
    techStack: [],
    liveLink: "",
    githubLink: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch("/api/admin/projects");
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  };

  const handleEdit = (project: Project) => {
    setIsEditing(project.id);
    setFormData(project);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch("/api/admin/projects", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) fetchProjects();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    if (isEditing && isEditing !== "new") data.append("id", isEditing);
    data.append("title", formData.title || "");
    data.append("description", formData.description || "");
    data.append("techStack", Array.isArray(formData.techStack) ? formData.techStack.join(",") : "");
    data.append("liveLink", formData.liveLink || "");
    data.append("githubLink", formData.githubLink || "");
    if (imageFile) data.append("image", imageFile);
    if (formData.image) data.append("existingImagePath", formData.image);

    const res = await fetch("/api/admin/projects", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setIsEditing(null);
      setFormData({});
      setImageFile(null);
      fetchProjects();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-border pb-4">
          <h1 className="font-heading text-2xl font-bold">Admin Panel</h1>
          <button
            onClick={() => {
              setIsEditing("new");
              setFormData({ title: "", description: "", techStack: [], liveLink: "", githubLink: "" });
            }}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-sm text-sm"
          >
            <Plus size={16} /> Add Project
          </button>
        </header>

        {isEditing && (
          <div className="mb-12 p-6 bg-surface border border-border rounded-sm">
            <h2 className="font-heading text-lg font-bold mb-4">
              {isEditing === "new" ? "Add New Project" : "Edit Project"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-background border border-border p-2 text-sm"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Tech Stack (comma separated)"
                  className="bg-background border border-border p-2 text-sm"
                  value={Array.isArray(formData.techStack) ? formData.techStack.join(", ") : ""}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value.split(",") })}
                  required
                />
              </div>
              <textarea
                placeholder="Description"
                className="w-full bg-background border border-border p-2 text-sm h-24"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Live Link"
                  className="bg-background border border-border p-2 text-sm"
                  value={formData.liveLink}
                  onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="GitHub Link"
                  className="bg-background border border-border p-2 text-sm"
                  value={formData.githubLink}
                  onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">Screenshot</label>
                <input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="text-xs"
                  accept="image/*"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(null)}
                  className="px-4 py-2 border border-border text-sm flex items-center gap-2"
                >
                  <X size={16} /> Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-accent text-white text-sm flex items-center gap-2 disabled:opacity-50"
                >
                  <Save size={16} /> {loading ? "Saving..." : "Save Project"}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.id} className="p-4 border border-border flex items-center justify-between">
              <div>
                <h3 className="font-heading font-medium">{p.title}</h3>
                <p className="text-xs text-muted truncate max-w-md">{p.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="p-2 hover:text-accent transition-colors"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="p-2 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}