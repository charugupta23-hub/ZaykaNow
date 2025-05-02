import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center"
      >
        <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold text-green-700 mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your food is being prepared! 🍽️</p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
