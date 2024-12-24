import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="px-4 py-2 rounded-full glass inline-block mb-6 animate-float">
          Welcome to Hustling Labs
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empower Your
          <span className="text-gradient"> No-Code Dreams</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create powerful solutions without writing a single line of code.
          Premium plugins and templates for modern platforms.
        </p>
        <Button size="lg" className="glass glass-hover">
          Explore Products
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;