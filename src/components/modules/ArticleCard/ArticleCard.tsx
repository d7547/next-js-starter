"use client";

import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IconBookmark, IconClock, IconEye } from "@tabler/icons-react";

interface ArticleCardProps {
  title: string;
  description: string;
  imageSrc: string;
  readTime: string;
  views: number;
  bookmark:React.ReactNode
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  description,
  imageSrc,
  readTime,
  views,
  bookmark
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description]);

  return (
    <div className="w-full max-w-5xl p-4 bg-white rounded-md shadow hover:shadow-md transition-shadow duration-300 animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <div className="relative h-48 w-full rounded-md bg-gray-200 overflow-hidden">
            <Image
              src={imageSrc}
              alt="Article thumbnail"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>

          <div
            style={{
              maxHeight: isExpanded ? `${contentHeight}px` : "7.4rem",
              overflow: "hidden",
              transition: "max-height 0.8s ease",
            }}
          >
            <p
              ref={contentRef}
              className="text-gray-600 text-sm whitespace-pre-line"
            >
              {description}
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4 mt-4 text-sm text-gray-500">
       
        {bookmark}

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <IconClock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>

          <div className="flex items-center gap-1">
            <IconEye className="w-4 h-4" />
            <span>Views {views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
