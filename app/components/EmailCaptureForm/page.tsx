"use client";

import { ArrowRight, Mail } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EmailCaptureForm = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      if (response.ok) {
        setSubscriberEmail("");
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Please try again.");
      }
    } catch (error) {
      setErrorMessage(`An ${error} occurred. Please try again.`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              required
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Yes, I Want to Price Like a Pro</span>
            <ArrowRight size={18} />
          </button>
        </form>
        {errorMessage && (
          <p className="mt-4 text-sm text-red-600 text-center">
            {errorMessage}
          </p>
        )}
        <p className="mt-4 text-sm text-gray-500 text-center">
          No fluff. Just straight-up strategy you can apply immediately.
        </p>
      </div>
    </div>
  );
};

export default EmailCaptureForm;
