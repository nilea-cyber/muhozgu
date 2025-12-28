import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceTimeline } from "./components/experience-timeline";
import { SkillsTools } from "./components/skills-tools";
import { ProjectsSection } from "./components/projects-section";
import { CVSection } from "./components/cv-section";
import { ContactSection } from "./components/contact-section";
// import { LanguageSelector } from "./components/language-selector";
import { ScrollToTop } from "./components/scroll-to-top";
import { MobileMenu } from "./components/mobile-menu";
import { useState, useEffect } from "react";
import { FreeTimeChart } from "./components/free-time-chart";
import { GithubIcon, Linkedin, Slack, PackageOpen } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200" 
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-slate-900 text-[20px] font-bold">Guy Muhoza</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a 
              href="#about" 
              className="text-slate-600 hover:text-[#2563EB] transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-slate-600 hover:text-[#2563EB] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 hover:text-[#2563EB] transition-colors"
            >
              Contact
            </a>
            {/* <LanguageSelector /> */}
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsTools />
        <ProjectsSection />
        <FreeTimeChart />
        <CVSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4c6baf] to-[#1d4ed8] flex items-center justify-center shadow-full overflow-hidden">
                <PackageOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-900">Guy Brillant Muhoza</p>
                <p className="text-slate-500">Support Analyst</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Muhozgu" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit GitHub"
                aria-label="Visit GitHub"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhozgu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit LinkedIn"
                aria-label="Visit LinkedIn"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://taskmanagemen-qc27955.slack.com/?redir=%2Fteam%2FU09SYPY82DV%3Fu%3DU09SYPY82DV" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit Slack"
                aria-label="Visit Slack"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Slack className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>© 2026 Guy Muhoza. Built with passion.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}