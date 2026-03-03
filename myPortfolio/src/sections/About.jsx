import {Cpu, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Rocket,
        title: "Always Learning",
        description: "Constantly pushing my skills forward, picking up new technologies, exploring new ideas, and going deeper into what I already know.",

    },
    {
        icon: Cpu ,
        title: "Systems Minded",
        description: "Systems programming background gives me an edge in writing software that's efficient and intentional.",

    },
    {
        icon: Users,
        title: "Team Experienced",
        description: "Worked in a team environment and learned that good software is as much about communication as it is about code.",

    },
    {
        icon: Lightbulb,
        title: "Problem First",
        description: "Start with the problem, not the technology. Then build the most practical solution.",

    },
];

export const About = () => {
    return(
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        
                    

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future, <span className="italic font-normal text-white"> one component at a time.</span></h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a Computer Science student at UCF with a focus on software engineering. I'm drawn to understanding how things work from the logic behind web apps,
                                to the internals of operating systems to the advancement of AI.
                            </p>
                            <p>
                                When I step away from the keyboard I'm lifting at the gym, spending time with family, or deep in Star Wars or Marvel rewatch. Discipline and curiosity drive everything I do on and off the screen.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My goal is to grow into an engineer who understands the full picture, from the user interface down to the system level."
                            </p>
                        </div>
                        
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx +1) * 100} ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}