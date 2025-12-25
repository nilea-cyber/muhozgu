import { Card, CardContent } from "./ui/card";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">About Me</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            I'm a Computer Science student who discovered my passion for data analytics 
            through real-world customer support experience. I bridge the gap between technical 
            skills and business needs, turning raw data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-slate-200 hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">Education</h3>
              <p className="text-slate-600">
                Pursuing BS in Computer Science with a focus on Data Analytics. 
                Currently maintaining a 3.8 GPA while gaining practical experience through internships.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">Career Goals</h3>
              <p className="text-slate-600">
                Seeking opportunities to leverage data analytics and software development skills 
                to solve real business problems and drive data-informed decision making.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">What I Bring</h3>
              <p className="text-slate-600">
                Unique combination of technical expertise, customer empathy, and analytical thinking. 
                I excel at translating complex data into clear, actionable insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
