import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const platforms = [
  { name: "Framer", icon: "framer" },
  { name: "Bubble.io", icon: "bubble" },
  { name: "Shopify", icon: "shopping-bag" },
  { name: "V0", icon: "code" },
  { name: "Bolt", icon: "zap" },
];

const products = [
  {
    title: "No-Code Plugins",
    description: "Extend your platform's capabilities with our premium plugins",
    icon: "puzzle",
  },
  {
    title: "Templates",
    description: "Launch faster with our professionally designed templates",
    icon: "layout-template",
  },
  {
    title: "Custom Solutions",
    description: "Tailored no-code solutions for your specific needs",
    icon: "settings",
  },
];

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
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

      {/* Platforms Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Platforms We Support</h2>
          <p className="text-muted-foreground">
            Build on the world's leading no-code platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover p-6 rounded-xl text-center"
            >
              <div className="text-2xl mb-3">{platform.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground">
            Premium solutions for your no-code journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="Your email"
                className="glass glass-hover"
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your message"
                className="glass glass-hover min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full glass glass-hover">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;