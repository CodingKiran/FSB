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
    title: "Day 1 - Why Charging Per Word Keeps You Broke",
    content:
      "You’re not charging too little because you’re new. You’re charging too little because of this.",
  },
  {
    title:
      "Day 2 - 3 Pricing Models That Instantly Make You Sound Like a Pro (Instead of a ₹0.50/Word Writer)”",
    content:
      "You don’t need more clients — you need a smarter way to quote your value..",
  },
  {
    title: "Day 3 - 5 Subtle Beliefs That Keep You Stuck At Low Rates",
    content:
      " If you’ve ever felt nervous saying your price out loud… this might be why.",
  },
  {
    title: "Day 4 - How to Package Offers That Clients Feel Stupid Saying No",
    content:
      "You’re already doing more than “just writing.” It’s time to get paid like it.",
  },
  {
    title:
      "Day 5 - The 1-Page Asset That Explains Your Offer Easy & Fast To Clients",
    content:
      "No more rate cards. No awkward price talks. Just send this — and let it do the talking.",
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
