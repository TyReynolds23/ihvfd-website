import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

        useEffect(() => {
            document.body.style.overflow = menuOpen ? "hidden" : "";
        }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-50">
                <a href="#home"><img src="/ihvfd-logo.png" alt="IHVFD Logo" className="h-45"></img></a>

                <div className="w-10 h-10 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="hover:text-gray-700 transition-colors">{" "} Home {" "}</a>
                    <a href="#about" className="hover:text-gray-700 transition-colors">{" "} About {" "}</a>
                    <a href="#apparatus" className="hover:text-gray-700 transition-colors">{" "} Apparatus {" "}</a>
                    <a href="#safetyAndPrevention" className="hover:text-gray-700 transition-colors">{" "} Safety And Prevention {" "}</a>
                    <a href="#contact" className="hover:text-gray-700 transition-colors">{" "} Contact {" "}</a>
                    <a href="#donate" className="hover:text-gray-700 transition-colors">{" "} Donate {" "}</a>
                </div>
            </div>
        </div>
    </nav>
    );
}