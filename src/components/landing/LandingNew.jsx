import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const LandingNew = () => {
  const [scrolled, setScrolled] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 10000) setCount1((prev) => prev + 100);
      if (count2 < 95) setCount2((prev) => prev + 1);
      if (count3 < 50) setCount3((prev) => prev + 1);
    }, 20);

    return () => clearInterval(interval);
  }, [count1, count2, count3]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Join thousands of successful businesses using our platform to grow
              their online presence.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto aspect-video overflow-hidden rounded-xl border bg-muted/40"
            variants={itemVariants}
          >
            <img
              alt="Dashboard Preview"
              className="object-cover"
              height="300"
              src="https://placehold.co/300x600"
              width="600"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingNew;
