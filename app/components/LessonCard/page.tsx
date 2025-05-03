"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import EmailCaptureForm from "../EmailCaptureForm/page";

export interface Lesson {
  title: string;
  content: string;
}

const Lesson = [
  {
    title: "Day 1 - The “Portfolio Trap” That Wastes Time and Gets You Nowhere",
    content:
      "Why fancy websites don’t impress clients — and what they really want to see before hiring you",
  },
  {
    title: "Day 2 - The No-Client Mornings That Keep You Stressed",
    content:
      "What to do when your inbox is empty — and how to start bringing in new clients without waiting for luck.",
  },
  {
    title:
      "Day 3 - Still Charging Less Than You Should? Here’s Why You’re Stuck",
    content:
      "The real reason you’re underpaid — and how to shift your mindset and pricing without fear",
  },
  {
    title: "Day 4 - You Got the Lead… But They Ghosted. Here’s Why",
    content:
      "You’re jumping to prices too fast. Here’s how to listen better, pitch smarter, and turn “maybe” into “let’s start.”",
  },
  {
    title:
      "Day 5 - The Simple Habit That Gets You Hired Faster Than Cold Emails",
    content:
      "Most freelancers send pitches and pray. The smart ones learn their client’s business — and win trust (and projects) quickly.",
  },
];

const LessonCard = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <div className="my-6">
      {Lesson.map((lesson, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow mb-4"
        >
          <div
            onClick={() => toggleExpand(i)}
            className="px-6 py-4 flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-lg font-medium text-gray-900">
              {lesson.title}
            </h3>
            <button className="text-gray-500 hover:text-blue-600 transition-colors">
              {expandedIndex === i ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>

          <AnimatePresence>
            {expandedIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-left">
                    {lesson.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <EmailCaptureForm />
    </div>
  );
};

export default LessonCard;
