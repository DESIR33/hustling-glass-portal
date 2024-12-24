import { motion } from "framer-motion";

const platforms = [
  { 
    name: "Framer", 
    icon: "framer",
    logo: "lovable-uploads/7407e0c4-d627-4dcd-9e8e-c357a3c987d4.png"
  },
  { 
    name: "Bubble.io", 
    icon: "bubble",
    logo: "lovable-uploads/5e459309-a7d0-44fb-ad17-f35aa5c3012f.png"
  },
  { 
    name: "Shopify", 
    icon: "shopping-bag",
    logo: "lovable-uploads/3dd62c90-a12b-4007-8e3c-bd2bead7e2eb.png"
  },
  { 
    name: "V0", 
    icon: "code",
    logo: "lovable-uploads/bb6c7dec-9833-4308-bddd-69e062adc666.png"
  },
  { 
    name: "Bolt", 
    icon: "zap",
    logo: "lovable-uploads/eaefcd9b-6477-4fe1-a7db-0e4ff448e520.png"
  },
];

const PlatformsSection = () => {
  return (
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
            className="glass glass-hover p-6 rounded-xl text-center flex items-center justify-center"
          >
            <img 
              src={platform.logo} 
              alt={platform.name} 
              className="h-12 w-auto object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              title={platform.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformsSection;