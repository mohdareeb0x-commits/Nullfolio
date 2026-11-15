import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const PROJECTS_FILE = path.join(process.cwd(), "data", "projects.json");
const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const data = await fs.readFile(PROJECTS_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const formData = await request.formData();
    const id = formData.get("id") as string || Date.now().toString();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const techStack = (formData.get("techStack") as string).split(",").map(s => s.trim());
    const liveLink = formData.get("liveLink") as string;
    const githubLink = formData.get("githubLink") as string;
    const image = formData.get("image") as File | null;

    let imagePath = formData.get("existingImagePath") as string || "";

    if (image && typeof image !== "string") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `${id}-${image.name}`;
      await fs.writeFile(path.join(PROJECTS_DIR, fileName), new Uint8Array(buffer));
      imagePath = `/projects/${fileName}`;
    }

    const data = await fs.readFile(PROJECTS_FILE, "utf-8");
    let projects = JSON.parse(data);

    const projectIndex = projects.findIndex((p: any) => p.id === id);
    const projectData = {
      id,
      title,
      description,
      techStack,
      liveLink,
      githubLink,
      image: imagePath,
    };

    if (projectIndex > -1) {
      projects[projectIndex] = projectData;
    } else {
      projects.push(projectData);
    }

    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));

    return NextResponse.json({ success: true, project: projectData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to save project" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const { id } = await request.json();
    const data = await fs.readFile(PROJECTS_FILE, "utf-8");
    let projects = JSON.parse(data);

    const filteredProjects = projects.filter((p: any) => p.id !== id);
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(filteredProjects, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
