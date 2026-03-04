import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedButton} from "../components/AnimatedButton";

const projects = [
    {
        title:"Sea Your Contacts",
        description: "A modern, underwater themed CRUD application built to streamline contact organization with a splash of personality. This project focuses on high performance UI interactions and secure data management, providing users with a fluid experience directly in the browser.",
        image: "/contactsManager2.jpg",
        tags: ["JavaScript", "PHP", "MySQL", "CSS", "HTML5"],
        github: "#"
    },
    {
        title:"Binary Tree Visualizer",
        description: "A simple interactive Binary Search Tree (BST) visualizer that allows users to perform real-time insertions and deletions. The application dynamically calculates node positions and renders the tree structure using React and SVG, providing a clear visual representation of data structure algorithms.",
        image: "/BinaryTreePic.jpg",
        tags: ["JavaScript", "React", "SVG", "CSS", "HTML5"],
        github: "https://github.com/HaroldSaenz87/DSA"
    },
    {
        title:"Portfolio",
        description: "A personal portfolio built with React and TailwindCSS showcasing my projects, skills, and experience as a full stack software engineer.",
        image: "/portfolioPic.jpg",
        tags: ["React", "TailwindCSS", "JavaScript", "Vite"],
        github: "https://github.com/HaroldSaenz87/Portfolio"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Code I've
                        <span className="italic font-normal text-white"> brought to life</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Some of the things I've built while learning, exploring, and solving problems.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx +1) * 100}ms`}}>
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            
                            
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
}