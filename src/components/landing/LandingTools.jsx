import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  CreditCard,
  Globe,
  Package,
  Settings,
  Users,
} from "lucide-react";

const LandingTools = () => {
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
    <section className="border-t bg-muted/40 py-24 md:py-32">
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
              Powerful Admin Tools
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              Everything you need to manage your e-commerce business efficiently
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="relative overflow-hidden rounded-lg border bg-background p-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Real-time Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor your business performance in real-time
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-4">
                  <div>
                    <p className="text-sm font-medium">Daily Sales</p>
                    <p className="text-2xl font-bold">$12,486</p>
                  </div>
                  <div className="text-primary">+12.5%</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-4">
                  <div>
                    <p className="text-sm font-medium">Active Users</p>
                    <p className="text-2xl font-bold">1,249</p>
                  </div>
                  <div className="text-primary">+8.2%</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-4">
                  <div>
                    <p className="text-sm font-medium">Conversion Rate</p>
                    <p className="text-2xl font-bold">3.2%</p>
                  </div>
                  <div className="text-primary">+2.4%</div>
                </div>
              </div>
            </motion.div>
            <motion.div className="grid gap-8" variants={itemVariants}>
              <div className="rounded-lg border bg-background p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Advanced Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Powerful tools for complete control
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Payment Processing</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>User Management</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span>Inventory Control</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Global Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with your favorite tools
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {/* Integration logos/placeholders */}
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                    <image
                      src="/https://placehold.co/40x40"
                      alt="Integration 6"
                      width={40}
                      height={40}
                      className="opacity-50"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingTools;
