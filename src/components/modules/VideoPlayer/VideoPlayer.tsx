import React, { useState } from "react";
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Wrapper styles
const videoWrapperVariants = cva(
  "relative w-full h-full rounded-lg overflow-hidden",
  {
    variants: {
      theme: {
        light: "bg-botticelliLight",
        dark: "dark:bg-botticelliDark",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);

// Thumbnail background
const thumbnailClass = cva("absolute inset-0 bg-cover bg-center");

// Video element
const videoClass = cva("absolute inset-0 w-full h-full object-cover");

// Play button
const playButtonClass = cva(
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none backdrop-blur-sm",
  {
    variants: {
      isPlaying: {
        true: "bg-white/80 dark:bg-bismarkLight animate-pulse",
        false: "bg-white/80 dark:bg-bismarkLight",
      },
    },
    defaultVariants: {
      isPlaying: false,
    },
  }
);

// Duration badge
const durationClass = cva(
  "absolute top-3 right-1/2 translate-x-1/2 backdrop-blur-sm text-white px-2 py-1 rounded-md text-md font-bold"
);

// Props interface
interface VideoPlayerProps extends VariantProps<typeof videoWrapperVariants> {
  thumbnail?: string;
  duration?: string;
  videoSrc: string;
  className?:string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnail,
  duration,
  theme,
  videoSrc,
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={cn(videoWrapperVariants({ theme }),className)}>
      {!isPlaying ? (
        <div
          className={cn(thumbnailClass())}
          style={{
            backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
            backgroundColor: thumbnail ? "transparent" : "rgb(209 213 219)",
          }}
        />
      ) : (
        <video className={cn(videoClass())} autoPlay muted loop>
          <source
            src={videoSrc ?? "https://www.w3schools.com/html/mov_bbb.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      <button onClick={togglePlay} className={cn(playButtonClass({ isPlaying }))}>
        {isPlaying ? (
          <IconPlayerPauseFilled className="text-bismarkLight" size={26} />
        ) : (
          <IconPlayerPlayFilled className="text-bismarkLight" size={26} />
        )}
      </button>

      {duration && <div className={cn(durationClass())}>{duration}</div>}
    </div>
  );
};
