import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import {Menu, X} from "lucide-react";

const navLink = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
    
]

export const Navbar = () => {

    const[isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const[isScrolling, setIsScrolling] = useState(false);



    useEffect(() => {

        const handleScrolling = () => {
            setIsScrolling(window.scrollY > 50);
        };


        window.addEventListener("scroll", handleScrolling);

        return () => window.removeEventListener("scroll", handleScrolling);

    }, []);

    return (

        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolling ? "glass2 py-3" : "bg-transparent py-5"}  z-50`}>
            
            <nav className="container mx-auto px-6 flex items-center justify-between">
                
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    HS <span className="text-primary">.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

                        {navLink.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}

                    </div>

                </div>

                <div className="hidden md:block">

                    <Button size="sm" className="cursor-pointer">Contact Me</Button>

                </div>


                {/* Mobile */}

                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuActive((prev) => !prev)}>

                    {isMobileMenuActive ? <X size={24} /> :<Menu size={24} />}

                </button>

            </nav>

            {isMobileMenuActive && <div className="md:hidden glass2 animate-fade-in">


                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

                    {navLink.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                    ))}

                    <Button>Contact Me</Button>

                </div>

            </div>}

        </header>);
}