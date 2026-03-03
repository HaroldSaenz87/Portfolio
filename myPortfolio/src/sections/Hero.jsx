import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedButton } from "../components/AnimatedButton";

const mySkills = [
    "React",
    "JavaScript",
    "Node.js",
    "C",
    "Java",
    "TailwindCSS",
    "MySQL",
    "PHP",
    "Git",
    "GitHub",
];



export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
        
        </div>


        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) =>(
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#7c3aed",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `drift-slow ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`


                }} />
            ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className=" space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Building across 
                            <br /> 
                            the <span className="text-primary glowText">whole</span>
                            <br />
                            <span className="italic font-normal text-white">stack</span>

                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Harold. An aspiring software engineer with a background
                            in Systems and AI. I build full-stack applications and love tackling 
                            problems at every level of the stack.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" className="cursor-pointer">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>

                        <AnimatedButton>

                            <Download className="w-5 h-5" />
                            Download CV

                        </AnimatedButton>
                        
                        
                    </div>

                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[{icon: Github, href: "https://github.com/HaroldSaenz87"},
                          {icon: Linkedin, href: "https://www.linkedin.com/in/harold-saenz-29250517a/"}
                          
                            
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                    
                </div>

                <div className="relative animate-fade-in animation-delay-300">
                    <div className="relative max-w-md mx-auto">
                        
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/ProfilePic.JPG" alt="Harold Saenz" className="w-full aspect-4/5 object-cover rounded-2xl"/>

                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-animateSkills">
                        {[...mySkills, ...mySkills].map((skills, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skills}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">

            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>


        </div>

    </section>);
};