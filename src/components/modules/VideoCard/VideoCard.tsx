"use client";

import { Button } from "@/components/elements/Button/Button";
import { FC, useRef, useState } from "react";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import {
  IconEye,
  IconFileLike,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconThumbUp,
} from "@tabler/icons-react";
import StatsRow from "../StatsRow/StatsRow";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  views: string;
  timestamp: string;
  onWatchClick?: () => void;
}

const VideoCard: FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  views,
  timestamp,
  onWatchClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
      setIsPlaying(true);
    } else if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div className="relative w-full md:w-2/4  bg-gray-200 rounded-md overflow-hidden">
          <video muted ref={videoRef} loop className="w-full ">
            <source
              src={"https://www.w3schools.com/html/mov_bbb.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-30 hover:bg-opacity-50 transition"
          >
            {isPlaying ? (
              <IconPlayerPauseFilled
                className="text-bismarkLight bg-white w-12 h-12 rounded-full p-2"
                size={26}
              />
            ) : (
              <IconPlayerPlayFilled
                className="text-bismarkLight bg-white w-12 h-12 rounded-full p-2"
                size={26}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-4">{description}</p>
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              variant="secondary"
              className="w-full max-w-[400px] "
              onClick={onWatchClick}
            >
              Watch Full Video
            </Button>
          </div>
        </div>
      </div>
      <StatsRow views={views} timestamp={timestamp} />
    </div>
  );
};

export default VideoCard;
