"use client";

import Typewriter from "typewriter-effect";

export const DeveloperConfig = () => {
  return (
    <div className="relative">
      <div className="relative aspect-square rounded-lg border border-border bg-card p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>

        <div className="relative h-full flex flex-col justify-between font-mono text-sm whitespace-pre">
          <div className="space-y-2 text-foreground">
            <div className="text-muted-foreground">// developer.config.ts</div>

            <Typewriter
              options={{
                delay: 25, // velocidad de escritura
                cursor: "_",
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                strings: [
                  `export const Developer = {
  name: "CodeByEvans",
  role: "Full-Stack Developer",
stack: [
  "React",
  "TypeScript",
  "Next.js",
],
skills: [
  "Supabase (PostgreSQL, auth, storage) & cloud services",
  "API design & consumption (REST)",
  "CI/CD & DevOps workflows",
  "Git & collaborative development",
  "Advanced tools: Zod, i18next, Framer Motion, Radix UI",
],
  projects: [
    "WeDock - a minimalist dock for couples",
    "Amando Ando - online christian store",
    "Clover Studio - handmade products website"
],
  passion: "Building meaningful digital experiences"
}`,
                ],
              }}
            />
          </div>

          <div className="flex items-center gap-2 text-primary mt-4">
            <span className="animate-pulse">{">"}</span>
            <span>Ready to build...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
