import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedProject() {
  return (
    <section id="projects" className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-slate-900">Featured Project</h2>
        <Card className="border-slate-200 overflow-hidden">
          <div className="aspect-video w-full bg-slate-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NjQ2NjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Support Ticket Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-slate-900">Support Ticket Dashboard</CardTitle>
              <Badge className="bg-[#2563EB] hover:bg-[#1d4ed8]">Power BI</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              An interactive dashboard built to visualize support ticket trends, 
              response times, and resolution rates. This project helped identify 
              bottlenecks in our support workflow and reduced average response time 
              by 30%.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="border-slate-300 text-slate-600">
                Data Visualization
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">
                SQL
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">
                Analytics
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
