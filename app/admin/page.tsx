import { headers } from "next/headers";
import dynamic from "next/dynamic";

const AdminPanelClient = dynamic(
  async () => {
    const { default: AdminPanel } = await import("./AdminPanelClient");
    return AdminPanel;
  },
  { ssr: false }
);

export default function AdminPage() {
  const headersList = headers();
  const host = headersList.get("host") || "";
  const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  // Only render admin panel on localhost
  if (!isLocalhost) {
    return null;
  }

  return <AdminPanelClient />;
}