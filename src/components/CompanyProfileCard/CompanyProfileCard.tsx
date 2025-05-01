"use client";
import {
  IconCheck,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatart";
import { ActionButton } from "../Avatar/ActionButton/ActionButton";

// Types for our components
type CompanyProfileProps = {
  name: string;
  location: string;
  description: string;
  logoLetter?: string;
  services: string[];
  videoThumbnail?: string;
  videoDuration?: string;
};

// Service Badge component
const ServiceBadge = ({ service }: { service: string }) => {
  return (
    <div className="flex items-center gap-2 text-gray-600 mb-3">
      <div className="bg-cadetBlueLight dark:cadetBlueDark rounded-full p-1">
        <IconCheck size={16} className="text-white font-bold" />
      </div>
      <span className="text-sm">{service}</span>
    </div>
  );
};

// Avatar component

// Video Player component
const VideoPlayer = ({
  thumbnail,
  duration,
}: {
  thumbnail?: string;
  duration?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full bg-botticelliLight dark:bg-botticelliDark rounded-lg overflow-hidden">
      {/* Video placeholder image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
          backgroundColor: thumbnail ? "transparent" : "rgb(209 213 219)",
        }}
      />

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg
          transition-all duration-300 hover:scale-110 focus:outline-none
          ${isPlaying ? "animate-pulse" : ""}
        `}
      >
        {isPlaying ? (
          <IconPlayerPause size={24} />
        ) : (
          <IconPlayerPlay size={24} />
        )}
      </button>

      {/* Video duration badge */}
      {duration && (
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
          {duration}
        </div>
      )}
    </div>
  );
};

// Main Company Profile Component
export default function CompanyProfile({
  name,
  location,
  description,
  logoLetter = "A",
  services,
  videoThumbnail,
  videoDuration,
}: CompanyProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followState, setFollowState] = useState<string>("Follow");

  const handleFollowClick = (): void => {
    setFollowState(followState === "Follow" ? "Following" : "Follow");
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // Split services array into two columns
  const midpoint = Math.ceil(services.length / 2);
  const leftServices = services.slice(0, midpoint);
  const rightServices = services.slice(midpoint);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="md:flex ">
        <div className="md:w-2/5 p-4">
          <div className="flex items-center flex-1">
            <Avatar letter={logoLetter} />
            <div className="ml-3">
              <h2 className="font-medium text-gray-800">{name}</h2>
              <p className="text-xs text-gray-500">{location}</p>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 p-4 md:p-6">
          <div className="flex gap-3">
            <ActionButton variant="primary" onClick={handleFollowClick}>
              {followState}
            </ActionButton>
            <ActionButton variant="secondary">Share</ActionButton>
          </div>
        </div>
      </div>
      <div className="md:flex">
        {/* Left column with logo and video */}
        <div className="md:w-2/5 p-4">
          <div className="h-56 md:h-full rounded-lg overflow-hidden">
            <VideoPlayer thumbnail={videoThumbnail} duration={videoDuration} />
          </div>
        </div>

        {/* Right column with description, services and CTAs */}
        <div className="md:w-3/5 p-4 md:p-6">
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-8">
            <div>
              {leftServices.map((service, idx) => (
                <ServiceBadge key={`left-${idx}`} service={service} />
              ))}
            </div>
            <div>
              {rightServices.map((service, idx) => (
                <ServiceBadge key={`right-${idx}`} service={service} />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button variant="primary" className="flex-1 ">
              Book Meeting
            </Button>
            <Button variant="outline" className="flex-1" onClick={toggleFollow}>
              {isFollowing ? "Following" : "Free Trial"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
