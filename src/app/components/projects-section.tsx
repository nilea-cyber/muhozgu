import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Support Ticket Dashboard",
    description: "An interactive dashboard built to visualize support ticket trends, response times, and resolution rates. This project helped identify bottlenecks in our support workflow and reduced average response time by 30%.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NjQ2NjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainTech: "Power BI",
    tags: ["Data Visualization", "SQL", "Analytics", "EDA"],
  },
  {
    title: "Customer Insights ML Model",
    description: "Developed a machine learning model to predict customer churn based on support interactions and usage patterns. Achieved 87% accuracy using Python and scikit-learn, helping the team proactively retain at-risk customers.",
    image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWx8ZW58MXx8fHwxNzY2NTM3NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainTech: "Python",
    tags: ["Machine Learning", "Pandas", "Scikit-learn"],
  },
  {
    title: "Automated Report Generator",
    description: "Built a Python script that automates weekly reporting for the support team. Pulls data from multiple sources, generates visualizations, and emails stakeholders. Saves 10+ hours per week.",
    image: "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc2NjUzNzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainTech: "Python",
    tags: ["Automation", "APIs", "Data Processing"],
  },
  {
    title: "Sales Performance Dashboard",
    description: "Created an interactive Excel dashboard for the sales team to track KPIs, conversion rates, and revenue trends. Features dynamic charts and pivot tables that update in real-time.",
    image: "https://images.unsplash.com/photo-1745847768367-893e989d3a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBsYXB0b3B8ZW58MXx8fHwxNzY2NDI5NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainTech: "Excel",
    tags: ["Excel", "Pivot Tables", "VBA"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in data analysis, automation, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="aspect-video w-full bg-slate-100 overflow-hidden relative group">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#2563EB] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-slate-900 flex-1">{project.title}</CardTitle>
                  <Badge className="bg-[#2563EB] hover:bg-[#1d4ed8] ml-2">{project.mainTech}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-slate-300 text-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}