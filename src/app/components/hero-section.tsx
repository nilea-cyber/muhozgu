import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GithubIcon, LinkedinIcon, Slack } from "lucide-react";


export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Picture */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#2563EB] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <ImageWithFallback
                src="../../../image.jpg"
                alt="Guy Brillant Muhoza"
                className="w-auto h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4">
              Hi, I'm <span className="text-[#2563EB]">Guy Brillant Muhoza</span>
            </h1>
            <p className="text-slate-600 mb-2">
              Technical Support/Application Support Analyst | SQL & Python | Power BI
            </p>
            <p className="text-slate-500 mb-6">
              Computer Science student with experience in technical support, troubleshooting, SQL, and API-based systems in SaaS environments.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a 
                href="https://github.com/Muhozgu" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhozgu/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://taskmanagemen-qc27955.slack.com/?redir=%2Fteam%2FU09SYPY82DV%3Fu%3DU09SYPY82DV" 
                target="_blank"
                rel="noopener noreferrer"
                title="Slack"
                className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Slack className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/30"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}