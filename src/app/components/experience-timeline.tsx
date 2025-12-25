import { Headphones, MessageSquare, BarChart, Code } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    icon: Code,
    title: "Computer Science Student",
    company: "University",
    period: "2022 - Present",
    description: "Pursuing BS in Computer Science with focus on Data Analytics and Software Development. GPA: 3.8/4.0",
    align: "right",
  },
  {
    icon: BarChart,
    title: "Data Analysis Intern",
    company: "Tech Solutions Inc.",
    period: "Summer 2023",
    description: "Analyzed support metrics and created dashboards that improved team efficiency by 30%. Worked with SQL, Tableau, and Python.",
    align: "left",
  },
  {
    icon: MessageSquare,
    title: "Technical Support Specialist",
    company: "CloudTech",
    period: "2022 - 2023",
    description: "Diagnosed and resolved complex technical issues. Maintained 95% customer satisfaction rate while handling 50+ tickets daily.",
    align: "right",
  },
  {
    icon: Headphones,
    title: "Customer Support Representative",
    company: "StartupXYZ",
    period: "2021 - 2022",
    description: "First point of contact for customer inquiries. Developed strong communication skills and product knowledge.",
    align: "left",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-16 text-center text-slate-900">My Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[0.4375rem] md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-slate-300"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 ${
                  exp.align === "right" ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"
                }`}
              >
                {/* Content Card - Mobile: always left, Desktop: alternates */}
                <div className={`flex-1 md:w-5/12 ${exp.align === "right" ? "md:text-right" : "md:text-left"} text-left ml-12 md:ml-0`}>
                  <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className={`flex items-start gap-3 mb-3 ${exp.align === "right" ? "md:flex-row-reverse flex-row" : "md:flex-row flex-row"}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                          <exp.icon className="w-5 h-5 text-[#2563EB]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-slate-900">{exp.title}</h3>
                          <p className="text-[#2563EB]">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-slate-500 mb-3">{exp.period}</p>
                      <p className="text-slate-600">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Center Circle */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#2563EB] border-4 border-white shadow-lg"></div>
                </div>
                
                {/* Empty Space for desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}