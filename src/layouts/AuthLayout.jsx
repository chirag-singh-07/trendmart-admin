import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import { Link, Outlet } from "react-router-dom";
import {
  FaShieldAlt,
  FaBoxOpen,
  FaChartLine,
  // FaTruckMoving,
} from "react-icons/fa"; // Icons for features
import { motion } from "framer-motion"; // Animation library

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <main className="flex h-screen w-full">
        {/* Left Side - Seller Features & Branding */}
        <div className="hidden md:flex w-1/2 h-full bg-gradient-to-br from-black to-gray-800 text-white items-center justify-center px-10">
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Text */}
            <h1 className="text-3xl font-bold">
              Welcome to{" "}
              <Link to={"/"} className="text-yellow-400">
                TrendMart Admin
              </Link>
            </h1>
            <p className="text-lg text-gray-300">
              The ultimate platform to manage and grow your online business.
            </p>

            {/* Key Features with Icons */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                <FaBoxOpen className="text-3xl text-yellow-400" />
                <p className="text-lg text-gray-200">
                  Easily list and manage your products
                </p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                <FaChartLine className="text-3xl text-green-400" />
                <p className="text-lg text-gray-200">
                  Track your sales and revenue in real-time
                </p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                <FaShieldAlt className="text-3xl text-blue-400" />
                <p className="text-lg text-gray-200">
                  Secure transactions and seamless payouts
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Authentication Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full p-20">
            <Outlet />
          </div>
        </div>
      </main>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
