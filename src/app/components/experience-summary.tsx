import { Headphones, MessageSquare, BarChart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Resolved 500+ customer inquiries with 95% satisfaction rate",
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    description: "Diagnosed and solved complex technical issues efficiently",
  },
  {
    icon: BarChart,
    title: "Data Analysis",
    description: "Analyzed support metrics to improve team performance",
  },
];

export function ExperienceSummary() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-slate-900">My Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="mb-2 text-slate-900">{exp.title}</h3>
                <p className="text-slate-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
