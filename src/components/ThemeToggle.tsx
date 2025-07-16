import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full glass-card hover:scale-110 transition-all duration-300 group"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-primary group-hover:text-yellow-500 transition-colors" />
        ) : (
          <Moon className="h-5 w-5 text-primary group-hover:text-blue-500 transition-colors" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
    </Button>
  );
};