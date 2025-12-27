import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, Globe, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    alert("Thank you for your message! This is a demo, so the message wasn't actually sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">Let's Connect</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-slate-900">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <p className="text-slate-900">Email</p>
                    <a href="mailto:muhoza.g@outlook.com" className="text-[#2563EB] hover:underline">
                      muhoza.g@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <p className="text-slate-900">Location</p>
                    <p className="text-slate-600">Warsaw, PL</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <p className="text-slate-900">Phone</p>
                    <p className="text-slate-600">+48 880 998 </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-slate-100">
              <h4 className="text-slate-900 mb-2">Open to Opportunities</h4>
              <p className="text-slate-600">
                I'm currently seeking <span className="bg-green-300">internships</span> and entry-level positions in <span className="bg-green-300">Technical Support Analytics, Applications Support Analytics, Data Analytics, 
                business intelligence or software development</span>. Let's talk!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-slate-200 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
