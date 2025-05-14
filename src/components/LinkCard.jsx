import React from "react";

const LinkCard = ({ icon, title, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 mb-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
  >
    {icon && <span className="mr-3 text-xl">{icon}</span>}
    <span className="font-medium text-gray-900 dark:text-gray-100">
      {title}
    </span>
  </a>
);

export default LinkCard;
