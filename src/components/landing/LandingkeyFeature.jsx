import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  LayoutDashboard,
  Package,
  Settings,
  Users,
} from "lucide-react";
const LandingkeyFeature = () => {
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
          className="mx-auto grid max-w-5xl gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              Our platform provides all the tools you need to manage and grow
              your online business effectively.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <LayoutDashboard className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Intuitive Dashboard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a clear overview of your business performance at a glance.
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <BarChart3 className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Advanced Analytics</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Make data-driven decisions with detailed analytics and reports.
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <Package className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Inventory Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track and manage your inventory in real-time across all
                channels.
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <Users className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Customer Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Manage customer relationships and track their journey.
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <Settings className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Customization</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Customize your dashboard and reports to match your needs.
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <Globe className="h-12 w-12 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Global Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                24/7 support to help you succeed anywhere in the world.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingkeyFeature;
