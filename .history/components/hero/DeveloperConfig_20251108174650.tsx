import Typewriter from "typewriter-effect";

export const DeveloperConfig = () => {
  return (
    <div className="relative">
      <div className="relative aspect-square rounded-lg border border-border bg-card p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
        <div className="relative h-full flex flex-col justify-between font-mono text-sm">
          <div className="space-y-2">
            <div className="text-muted-foreground">
              {"// developer.config.ts"}
            </div>
            <div className="text-foreground">
              {"export const developer = {"}
            </div>
            <div className="pl-4 text-foreground">
              {'  name: "CodeByEvans",'}
            </div>
            <div className="pl-4 text-foreground">
              {'  role: "Full-Stack Developer",'}
            </div>
            <div className="pl-4 text-foreground">{"  stack: ["}</div>
            <div className="pl-8 text-primary">{'    "React",'}</div>
            <div className="pl-8 text-primary">{'    "TypeScript",'}</div>
            <div className="pl-8 text-primary">{'    "Next.js",'}</div>
            <div className="pl-8 text-primary">{'    "Node.js"'}</div>
            <div className="pl-4 text-foreground">{"],"}</div>
            <div className="pl-4 text-foreground">
              {'  passion: "Building great products"'}
            </div>
            <div className="text-foreground">{"}"}</div>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <span className="animate-pulse">{">"}</span>
            <span>{"Ready to build..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
