import { Badge } from "./ui/badge";
import { Braces, ChartPie, Wrench, Handshake, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Braces,
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "Java", "XML", "Git", " REST API", ".NET", "Big Query"],
  },
  {
    icon: ChartPie,
    title: "Data & Analytics",
    skills: ["Power BI", "Excel", "Data Visualization", "Statistics", "Exploratory Data Analysis"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Zendesk", "Salesforce", "Google Docs", "Linux", "macOS", "SAP/ERP", "Zoom", "Pandas", "NumPy", "Jupyter"],
  },
  {
    icon: Handshake,
    title: "Soft Skills",
    skills: ["Customer Success", "Problem Solving", "Story Telling", "CRM", "Troubleshooting", "Communication", "Team Work", "Adaptability", "Time Management"],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English", "French", "Kirundi", "Swahili", "Polish", "Danish"],
  }
];

export function SkillsTools() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">Skills & Tools</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-6 rounded-2xl border-2 border-slate-100 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#ffffff]" />
                </div>
                <h3 className="text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-md transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}