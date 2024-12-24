import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Find Your Tool",
    description: "Whether you're building in Lovable, Bolt, Replit Agents, V0, or Bubble, we got something for you.",
    platforms: [
      { name: "Lovable", logo: "/lovable-uploads/7407e0c4-d627-4dcd-9e8e-c357a3c987d4.png" },
      { name: "Bolt", logo: "/lovable-uploads/eaefcd9b-6477-4fe1-a7db-0e4ff448e520.png" },
      { name: "V0", logo: "/lovable-uploads/bb6c7dec-9833-4308-bddd-69e062adc666.png" },
      { name: "Bubble", logo: "/lovable-uploads/5e459309-a7d0-44fb-ad17-f35aa5c3012f.png" },
    ]
  }
];

const HowItWorksSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground">
          Get started in minutes with these simple steps
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass p-8 mb-8 relative"
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              {step.number}
            </div>
            
            <div className="ml-8">
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {step.platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="glass-hover p-4 rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-8 w-auto object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
                      title={platform.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;