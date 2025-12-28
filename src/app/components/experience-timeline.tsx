// import { Headphones, MessageSquare, BarChart, Code } from "lucide-react";
import vizjaLogo from "../../../vizjaLogo.png";
import brainrocktetLogo from "../../../broLogo.png";
import tolokaLogo from "../../../tolokaLogo.jpg";
import telepLogo from "../../../telepLogo.png";

import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experiences = [
  {
    icon: vizjaLogo,
    title: "Computer Science Student",
    company: "University of Economics and Human Sciences in Warsaw - UEHS",
    period: "2023",
    description: "Pursuing BE in Computer Science with focus on Artificial Intelligence and Data Science",
    align: "right",
  },
  {
    icon: tolokaLogo,
    title: "Freelance Data Analyst (AI Training Data)",
    company: "Toloka",
    period: "Jun 2025 - Dec 2025",
    description: "Analyzed support metrics and created dashboards that improved team efficiency by 30%. Worked with SQL, Power BI, and Python.",
    align: "left",
  },
  {
    icon: brainrocktetLogo,
    title: "Customer Support Agent",
    company: "Brainrocket",
    period: "May 2025 - Oct 2025",
    description: "First point of contact for customer inquiries. Developed strong communication skills and product knowledge.",
    align: "right",
  },
  {
    icon: telepLogo,
    title: "Technical Support Specialist",
    company: "Teleperformance",
    period: "Sept 2023 - Feb 2025",
    description: "Diagnosed and resolved complex technical issues. Maintained 95% customer satisfaction rate while handling 50+ tickets daily.",
    align: "left",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-0 px-72 pt-35 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-16 text-center text-slate-900">My Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[0.4375rem] md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-slate-300"></div>
          
          {/* Timeline Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 ${
                  exp.align === "right" ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"
                }`}
              >
                {/* Content Card - Mobile: always left, Desktop: alternates */}
                <div className={`flex-1 md:w-5/12 ${exp.align === "right" ? "md:text-right" : "md:text-left"} text-left ml-12 md:ml-0 p-15`}>
                  <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className={`flex items-start gap-3 mb-3 ${exp.align === "right" ? "md:flex-row-reverse flex-row" : "md:flex-row flex-row"}`}>
                        <div className="w-10 h-10 rounded-lg bg-opacity-10 flex items-center justify-center flex-shrink-0">
                          <ImageWithFallback
                src={exp.icon}
                alt={exp.company}
                className="w-auto h-auto object-cover"
              />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-slate-900">{exp.title}</h3>
                          <p className="text-[#9ea2a9]">{exp.company}</p>
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