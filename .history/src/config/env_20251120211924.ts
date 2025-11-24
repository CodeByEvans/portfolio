import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(`Config validation error: ${result.error.message}`);
}

const envVars = result.data;

export const envs = {
  mongoUri: envVars.MONGODB_URI,
};
