import { motion } from "framer-motion";

const AdvantageSection2 = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-1"
        >
          <div className="glass p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Revenue Growth</span>
            </div>

            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-2">+127%</h3>
              <span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full text-sm">
                Exceeding targets
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 text-sm">Q1</span>
                  </div>
                  <span>First Quarter</span>
                </div>
                <span className="text-emerald-400">+32%</span>
              </div>
              
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 text-sm">Q2</span>
                  </div>
                  <span>Second Quarter</span>
                </div>
                <span className="text-emerald-400">+45%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scale Your Business Faster
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our templates are designed to help you grow your business quickly and efficiently
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary">2x</span>
              <p className="text-muted-foreground">
                Launch your products twice as fast with our pre-built components and templates.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary">24/7</span>
              <p className="text-muted-foreground">
                Get round-the-clock support from our team of experts to help you succeed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection2;