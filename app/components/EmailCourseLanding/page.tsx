"use client";

import React from "react";
import EmailCaptureForm from "../EmailCaptureForm/page";

export default function SaaSFounderLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          This free email course will show you everything you need to become a
          successful writer without compromising your mental health, social
          life, and family time.
        </h1>

        <ul className="text-lg text-gray-700 mb-8 space-y-2 text-left list-disc list-inside">
          <li>Show up with more clarity and confidence</li>
          <li>Build a client pipeline that doesn’t rely on luck</li>
          <li>Charge more without feeling like an imposter</li>
        </ul>

        <h2 className="text-2xl font-bold text-shadow-blue-800 text-gray-700 mb-6">
          Are you tired of guessing what actually gets clients to say “yes”?
        </h2>

        <p className="text-base text-gray-700 mb-6">
          I’m <strong> Kiran</strong>, a ghostwriter with 4 years of experience.
          I’ve wasted countless hours, made every mistake in the book, and spent
          too many sleepless nights figuring things out the hard way — so you
          don’t have to. These are the systems I’ve followed, refined, and still
          use today to attract better clients, earn more, and freelance without
          burning out.
        </p>

        <p className="text-base text-gray-700 mb-8">
          That’s why I built this free 5-day email course — to help you skip the
          guesswork and start growing with strategy, not stress.
        </p>

        {/* <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-8">
          “This free email course gave me more clarity than $1,000 coaching
          programs I’ve taken.”
        </blockquote> */}

        <EmailCaptureForm />
      </div>
    </div>
  );
}
