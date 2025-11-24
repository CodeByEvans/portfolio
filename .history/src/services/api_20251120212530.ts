import { envs } from "@/config/env";
import axios from "axios";

const API_BASE_URL = envs.mongoUri;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const projectsApi = {
  getProjects: async () => {
    const response = await api.get("/projects");
    return response.data;
  },
};
