import { Book, Camera, Music, Coffee, Gamepad, Plane } from "lucide-react";

const hobbies = [
  {
    icon: Book,
    title: "Reading",
    description: "Sci-fi novels and tech blogs",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Urban landscapes and nature",
  },
  {
    icon: Music,
    title: "Music",
    description: "Playing guitar and producing beats",
  },
  {
    icon: Coffee,
    title: "Coffee Brewing",
    description: "Exploring different brewing methods",
  },
  {
    icon: Gamepad,
    title: "Gaming",
    description: "Strategy games and puzzles",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring new cultures and cuisines",
  },
];

export function HobbiesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">Beyond the Code</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            When I'm not analyzing data or writing code, you'll find me pursuing these passions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {hobbies.map((hobby) => (
            <div 
              key={hobby.title}
              className="group text-center p-4 md:p-6 rounded-2xl border-2 border-slate-100 hover:border-[#2563EB] hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-slate-100 group-hover:bg-[#2563EB] flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300">
                <hobby.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-slate-900 mb-1">{hobby.title}</h3>
              <p className="text-slate-500 text-sm md:text-base">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}