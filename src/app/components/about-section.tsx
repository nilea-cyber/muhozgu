import { Card, CardContent } from "./ui/card";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">About Me</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Drive customer satisfaction through expert support and technical troubleshooting, 
            leveraging strong analytical skills and experience in data analysis. Proven ability to resolve 
            complex issues efficiently while maintaining positive customer relationships and 
            compliance standards. Skilled in using advanced tools such as Zendesk, Salesforce, and 
            AWS to optimize workflows and enhance service quality. Seeking to apply technical 
            expertise and client management skills to elevate customer experience in a dynamic 
            support environment.
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
                Pursuing Bachelor of Engineering in Computer Science with a focus on Artificial Intelligence and Data Science. 
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
                Seeking opportunities to apply technical, analytical, and problem-solving skills to support users, 
                resolve system issues, and contribute to data-informed decision making in a technology-driven environment.
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
                I bring a unique combination of technical skills, customer-focused communication, and analytical thinking.
                 I am effective at understanding complex problems and translating technical or data-driven insights into clear, actionable solutions for users and stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
