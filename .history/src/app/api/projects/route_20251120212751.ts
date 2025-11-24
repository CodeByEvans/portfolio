import { projectsApi } from "@/services/api";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const projects = await projectsApi.getProjects();
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
}
