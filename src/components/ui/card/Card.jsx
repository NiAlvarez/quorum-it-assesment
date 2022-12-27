import { CursorArrowRippleIcon, EyeIcon } from "@heroicons/react/24/outline";
import React from "react";
const Card = ({
  title,
  imageUrl,
  subtitle,
  category,
  views,
  createdAt,
  id,
    article,
  body
}) => {
  return (
    <div>
      {!article ? (
        <div className="max-w-sm mt-5 ml-5 bg-white border border-gray-200 rounded-lg shadow-md">
          <div>
            <img className="rounded-t-lg" src={imageUrl} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {subtitle}
              </p>
              <div className="flex flex-row justify-between mt-10">
                <div className="flex flex-row">
                  <CursorArrowRippleIcon className="h-1 w-auto sm:h-10 mr-2 mb-5" />
                  <span className="mb-2 capitalize">{category}</span>
                </div>
                <div className="flex flex-row">
                  <EyeIcon className="h-1 w-auto sm:h-10 mr-2" />
                  <span className="mt-2">{views}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-500">{createdAt.slice(0, 10)}</span>
                <a
                  href={`article/${id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-quorum-pink rounded-lg hover:bg-quorum-purple focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 bg-white border border-gray-200 rounded-lg shadow-md">
          <div>
            <h1 className="mb-3 mt-5 font-bold text-black flex justify-center text-5xl">
              {title}
            </h1>
            <div className="p-5">
              <div className="mt-3">
                <div className="flex flex-row justify-evenly">
                  <div>
                    <span className="text-gray-500">
                      {createdAt.slice(0, 10)}
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <CursorArrowRippleIcon className="h-1 w-auto sm:h-10 mr-2 mb-5" />
                    <span className="mb-2 capitalize">{category}</span>
                  </div>
                  <div className="flex flex-row">
                    <EyeIcon className="h-1 w-auto sm:h-10 mr-2" />
                    <span className="mt-2">{views}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-screen">
              <img src={imageUrl} />
            </div>
            <p className="mt-10 mb-10 ml-5 font-normal text-black text-xl">
              {subtitle}
            </p>
            <p className="ml-5 mr-5 mb-10 font-normal text-black ">
              {body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
