"use client";

import React from "react";
import EmailCaptureForm from "../EmailCaptureForm/page";

export default function SaaSFounderLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Still stuck charging ₹0.50- ₹1 per word?
        </h1>

        <p className="text-base text-lg text-left text-gray-700 mb-6">
          Most early-stage freelance writers undercharge — not because their
          writing isn&apos;t good, but because they were never shown how to
          price or position themselves properly.
        </p>

        <p className="text-base text-lg text-lg text-left text-gray-700 mb-6">
          I’m <strong> Kiran</strong>, a ghostwriter with 4+ years of
          experience. I started with per-word pricing too. But over time, I
          learned how to build trust, communicate value, and package offers that
          get clients to pay 2-5x more.
        </p>

        <p className="text-base text-lg text-left text-gray-700 mb-8">
          This email course shows you the exact systems l&apos;ve used to:
        </p>

        <ul className="text-lg text-gray-700 mb-8 space-y-2 text-left list-disc list-inside">
          <li>Go from per word to per month pricing</li>
          <li>Charge more without feeling like an imposter</li>
          <li>Raise my prices from $50 to $500+ per project</li>
        </ul>

        <p className="text-base text-lg text-left text-gray-700 mb-8">
          That’s why I built this free 5-day email course — to help you
          understand how your pricing is not directly related to your skill or
          work.
        </p>

        {/* <h2 className="text-2xl font-bold text-shadow-blue-800 text-gray-700 mb-6">
          Are you tired of guessing what actually gets clients to say “yes”?
        </h2> */}

        {/* <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-8">
          “This free email course gave me more clarity than $1,000 coaching
          programs I’ve taken.”
        </blockquote> */}

        <EmailCaptureForm />
      </div>
    </div>
  );
}
