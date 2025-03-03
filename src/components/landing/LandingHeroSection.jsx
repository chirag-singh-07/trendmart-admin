import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingHeroSection = () => {
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
      if (count1 < 100000) setCount1((prev) => prev + 400);
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
    <section className="relative overflow-hidden bg-muted/40 py-24 md:py-32 p-10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1fr_400px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Manage Your E-commerce Business with Ease
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Powerful admin dashboard for your online store. Track sales,
                manage inventory, and grow your business all in one place.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto aspect-video overflow-hidden rounded-xl border bg-muted/40 lg:aspect-square"
            variants={itemVariants}
          >
            <image
              alt="Dashboard Preview"
              className="object-cover"
              height="400"
              src="https://placehold.co/400x400"
              width="400"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold">{count1.toLocaleString()}+</h2>
            <p className="text-center text-sm text-muted-foreground">
              Active Users
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold">{count2}%</h2>
            <p className="text-center text-sm text-muted-foreground">
              Customer Satisfaction
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold">{count3}+</h2>
            <p className="text-center text-sm text-muted-foreground">
              Countries Served
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHeroSection;
