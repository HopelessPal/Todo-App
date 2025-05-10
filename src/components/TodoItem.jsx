import { motion } from "framer-motion";

function TodoItem({ todo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 mb-2 rounded-xl shadow-sm transition-colors"
    >
      <span className="text-gray-800 dark:text-gray-100">{todo}</span>
      <button className="text-sm bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 px-3 py-1 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition">
        Delete
      </button>
    </motion.div>
  );
}

export default TodoItem;
