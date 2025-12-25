import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageSelector } from "./language-selector";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-[73px] right-0 bottom-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <a 
            href="#about" 
            onClick={handleLinkClick}
            className="text-slate-600 hover:text-[#2563EB] transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={handleLinkClick}
            className="text-slate-600 hover:text-[#2563EB] transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="text-slate-600 hover:text-[#2563EB] transition-colors"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-slate-200">
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </>
  );
}
