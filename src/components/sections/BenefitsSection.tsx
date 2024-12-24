import { motion } from "framer-motion";
import { Clock, Award, DollarSign, Cpu, Rocket, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Launch your project in days instead of weeks or months"
  },
  {
    icon: Award,
    title: "Battle-tested Features",
    description: "Benefit from well-thought-out features and best practices"
  },
  {
    icon: Cpu,
    title: "AI Credit Efficient",
    description: "Minimize AI usage by starting with pre-built components"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Reduce development costs and get to market faster"
  },
  {
    icon: Rocket,
    title: "Instant Start",
    description: "Skip the setup phase and jump straight into customization"
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Built with security and scalability in mind"
  }
];

const BenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Use Our Templates?</h2>
        <p className="text-muted-foreground">
          Start your project with confidence using our battle-tested templates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
            <p className="text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;