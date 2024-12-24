import { motion } from "framer-motion";

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

const ProductsSection = () => {
  return (
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
  );
};

export default ProductsSection;