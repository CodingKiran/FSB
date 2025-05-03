import React from "react";
import LessonCard from "../LessonCard/page";

const CoursePreview = () => {
  return (
    <section
      id="course-preview"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to make sure this free email course is “worth it” before you
            sign-up?
          </h2>
          <h3 className="text-lg font-bold text-gray-700 max-w-2xl mx-auto">
            Here&apos;s everything that&apos;s inside:
          </h3>
        </div>
        <LessonCard />
      </div>
    </section>
  );
};

export default CoursePreview;
