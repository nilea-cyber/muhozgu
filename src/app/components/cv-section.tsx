import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";

export function CVSection() {
  const handleDownload = () => {
    // In a real implementation, this would download an actual CV file
    alert("CV download would start here. Please upload your CV file to enable this feature.");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className="mb-4 text-white">Interested in Working Together?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Download my CV to see my full experience, education, and technical skills. 
          Let's connect and discuss how I can contribute to your team.
        </p>
        <Button 
          onClick={handleDownload}
          size="lg"
          className="bg-white text-[#2563EB] hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </Button>
      </div>
    </section>
  );
}
