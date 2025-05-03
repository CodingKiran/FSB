import { ArrowUp, Clock, MailCheck, Sparkles } from "lucide-react";
import React from "react";
import EmailCaptureForm from "../EmailCaptureForm/page";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Free 5-Day Email Course
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              The Freelance Success System
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The 5 costly mistakes early-stage freelance writers make that lead
              to constant burnout, low income, and no steady work
              <strong> (Even After Landing a Few Clients) </strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-green-100 rounded-lg text-green-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Stop Wasting Time
                  </h3>
                  <p className="text-gray-600">
                    Avoid busywork that looks productive but doesn’t get
                    clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 p-2 bg-purple-100 rounded-lg text-purple-600">
                  <MailCheck size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Build a Client Pipeline
                  </h3>
                  <p className="text-gray-600">
                    Know exactly what to do daily to attract high-quality
                    clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 p-2 bg-amber-100 rounded-lg text-amber-600">
                  <ArrowUp size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Charge What You’re Worth
                  </h3>
                  <p className="text-gray-600">
                    Get out of the undercharging trap and build real income.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Create Offers That Sell
                  </h3>
                  <p className="text-gray-600">
                    Create offers that make clients feel like a no-brainer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <EmailCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
