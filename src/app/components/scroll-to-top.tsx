import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 p-0"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
}
