import { CircleCheckBig } from "lucide-react";

import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-blue-600 mx-8 my-6">
      <CircleCheckBig size={24} />
      <span className="font-bold text-lg">The Freelance Success System</span>
    </div>
  );
};

export default Header;
