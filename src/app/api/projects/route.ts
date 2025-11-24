import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  const projects = await Project.find({});
  return Response.json(projects);
}
