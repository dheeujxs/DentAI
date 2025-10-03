import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon, Play, Sparkles } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* GEOMETRIC BACKGROUND PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.03)_25%,hsl(var(--primary)/0.03)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.03)_75%)] bg-[size:20px_20px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]"></div>
      </div>

      {/* FLOATING GEOMETRIC SHAPES */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-primary/20 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/30 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary/15 rotate-12 animate-float-slow"></div>
      <div className="absolute bottom-20 right-40 w-3 h-3 bg-primary/25 rounded-full animate-float"></div>

      {/* MAIN GRID CONTAINER */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT - MINIMALIST APPROACH */}
            <div className="space-y-10">
              {/* ANIMATED BADGE */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-background/80 backdrop-blur-md rounded-full border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">AI-Powered Dental Assistant</span>
                </div>
                <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Live</span>
              </div>

              {/* TYPOGRAPHIC HIERARCHY */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                    <span className="block text-foreground">Dental</span>
                    <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Questions
                    </span>
                    <span className="block text-foreground">Answered</span>
                  </h1>
                </div>

                {/* MINIMALIST SUBTITLE */}
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light border-l-4 border-primary/20 pl-4 py-1">
                  Instant AI dental advice, smart appointment booking, and personalized care recommendations available 24/7.
                </p>
              </div>

              {/* MODERN CTA SECTION */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <SignUpButton mode="modal">
                    <Button size="lg" className="relative group overflow-hidden bg-foreground text-background hover:bg-foreground/90 border-0 px-8 py-6 h-auto rounded-2xl font-semibold text-base">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center gap-3">
                        <div className="p-1.5 bg-background/20 rounded-lg">
                          <MicIcon className="w-5 h-5" />
                        </div>
                        <span>Try Voice Agent</span>
                      </div>
                    </Button>
                  </SignUpButton>

                  
                </div>

                {/* PLAY DEMO BUTTON */}
                <Button variant="ghost" className="group p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Play className="w-4 h-4 text-primary ml-0.5" />
                    </div>
                    <span>Watch 2-min demo</span>
                  </div>
                </Button>
              </div>

              {/* MINIMAL TESTIMONIALS */}
              <div className="pt-8">
                <div className="flex items-center gap-8 p-6 bg-background/50 backdrop-blur-sm rounded-3xl border border-border/50">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-background flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-primary/30"></div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">1,200+ patients</span> trusted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - GEOMETRIC HERO VISUAL */}
            <div className="relative">
              {/* MAIN CONTAINER */}
              <div className="relative">
                {/* BACKGROUND GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,hsl(var(--primary)/0.02)_25px,hsl(var(--primary)/0.02)_26px,transparent_27px),linear-gradient(transparent_24px,hsl(var(--primary)/0.02)_25px,hsl(var(--primary)/0.02)_26px,transparent_27px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
                
                {/* GEOMETRIC CONTAINER */}
                <div className="relative bg-background/80 backdrop-blur-md rounded-[3rem] border border-border/50 p-8 shadow-2xl">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/50 rounded-full"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-accent/50">
                    <Image
                      src={"/hero.png"}
                      alt="DentAI - Modern Dental Assistant"
                      width={600}
                      height={600}
                      className="w-full h-auto mix-blend-multiply contrast-125"
                    />
                  </div>
                </div>

                {/* FLOATING STATS */}
                <div className="absolute -bottom-6 left-8 bg-background border border-border rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Available</div>
                  </div>
                </div>

                <div className="absolute -top-6 right-12 bg-background border border-border rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* DECORATIVE ELEMENTS */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;