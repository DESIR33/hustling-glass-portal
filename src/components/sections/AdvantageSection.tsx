import { motion } from "framer-motion";

const AdvantageSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Hustling Labs Advantage
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our templates help you save development time and money by helping you start from a 50% - 75% solution
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary">30+</span>
              <p className="text-muted-foreground">
                Develop your new SaaS, website, or project using one of our templates and save over 30 hours in development time.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary">$60+</span>
              <p className="text-muted-foreground">
                We spend over $60 worth of tokens to build our templates. This is money you get to save.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M19 14L19 6C19 4.89543 18.1046 4 17 4L7 4C5.89543 4 5 4.89543 5 6L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 15C3 14.4477 3.44772 14 4 14H20C20.5523 14 21 14.4477 21 15V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V15Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Current Balance</span>
            </div>

            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-2">$ 250,560.0</h3>
              <span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full text-sm">
                +12% vs last months
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <span>Olivia Moore</span>
                </div>
                <span>$523.00</span>
              </div>
              
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <span>Michael Johnson</span>
                </div>
                <span>$1,639.00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;