'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  const fakeCipher = `U2FsdGVkX19+eJ3RbNqU4g==`;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <motion.div
          className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="font-mono text-green-400 text-sm sm:text-base break-words pb-4"
            animate={{
              color: ["#f43f5e", "#f87171", "#f43f5e"],
              opacity: [0.6, 1, 0.6],
              x: [0, -1, 1, -2, 2, 0],
              skewX: [0, 1, -1, 0.5, -0.5, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {fakeCipher} :: error <br />
            Page not found.
          </motion.p>

          <p className="text-lg text-gray-300 pb-3">
            Even quantum attackers couldn't recover this one.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block no-underline bg-accent2 font-semibold px-5 py-2 rounded-lg shadow hover:bg-accent"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
