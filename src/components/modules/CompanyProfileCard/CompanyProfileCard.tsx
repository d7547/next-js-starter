"use client";
import {
  IconCheck,
  IconPlayerPause,
  IconPlayerPauseFilled,
  IconPlayerPlay,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "../../elements/Button/Button";
import { Avatar } from "../../elements/Avatar/Avatar";
import { ActionButton } from "../../elements/ActionButton/ActionButton";
import { ServiceBadge } from "@/components/elements/ServiceBadge/ServiceBadge";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";

type CompanyProfileProps = {
  name?: string;
  location?: string;
  description?: string;
  logoLetter?: string;
  services?: string[];
  videoThumbnail?: string;
  videoDuration?: string;
  videoSrc?: string;
  featureBadge?: React.ReactNode;
  onBookMeeting?: () => void;
  onFreeTrial?: () => void;
  onFollowToggle?: (isFollowing: boolean) => void;
  isFollowing?: boolean;
  showActions?: boolean;
  showButtons?: boolean;
  ctaButtons?: React.ReactNode;
  children?: React.ReactNode;
  containerClassName?: string;
  leftColClassName?: string;
  rightColClassName?: string;
};

export default function CompanyProfile({
  name = "Company Name",
  location = "Unknown location",
  description = "No description provided.",
  logoLetter = "A",
  services = [],
  videoThumbnail,
  videoDuration,
  videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4",
  featureBadge,
  onBookMeeting,
  onFreeTrial,
  onFollowToggle,
  isFollowing: controlledFollow,
  showActions = true,
  showButtons = true,
  ctaButtons,
  children,
  containerClassName = "",
  leftColClassName = "",
  rightColClassName = "",
}: CompanyProfileProps) {
  const [internalFollow, setInternalFollow] = useState(false);
  const isControlled = controlledFollow !== undefined;
  const following = isControlled ? controlledFollow : internalFollow;

  const handleFollowClick = (): void => {
    const newFollowState = !following;
    if (!isControlled) setInternalFollow(newFollowState);
    onFollowToggle?.(newFollowState);
  };

  const midpoint = Math.ceil(services.length / 2);
  const leftServices = services.slice(0, midpoint);
  const rightServices = services.slice(midpoint);

  return (
    <div
      className={`max-w-5xl w-full  bg-white shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg ${containerClassName}`}
    >
      {featureBadge}
      <div className="md:flex">
        <div className={`md:w-2/5 p-4 ${leftColClassName}`}>
          <div className="flex items-center">
            <Avatar letter={logoLetter} />
            <div className="ml-3">
              <h2 className="font-medium text-gray-800">{name}</h2>
              <p className="text-xs text-gray-500">{location}</p>
            </div>
          </div>
        </div>

        <div className={`md:w-3/5 p-4 md:p-6 ${rightColClassName}`}>
          {showActions && (
            <div className="flex gap-8">
              <ActionButton variant="primary" onClick={handleFollowClick}>
                {following ? "Following" : "Follow"}
              </ActionButton>
              <ActionButton variant="secondary">Share</ActionButton>
            </div>
          )}
        </div>
      </div>

      <div className="md:flex">
        {/* Left: Video */}
        <div className={`md:w-2/5 p-4 ${leftColClassName}`}>
          {videoThumbnail && videoDuration && (
            <div className="h-56 md:h-full rounded-lg overflow-hidden">
              <VideoPlayer
                thumbnail={videoThumbnail}
                duration={videoDuration}
                videoSrc={videoSrc}
              />
            </div>
          )}
        </div>

        {/* Right: Description + Services + CTAs */}
        <div className={`md:w-3/5 p-4 md:p-6 ${rightColClassName}`}>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>

          {services.length > 0 && (
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
          )}

          {ctaButtons ? (
            <div className="mb-6">{ctaButtons}</div>
          ) : (
            showButtons && (
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button variant="primary" className="flex-[2]" onClick={onBookMeeting}>
                  Book Meeting
                </Button>
                <Button variant="outline" className="flex-1" onClick={onFreeTrial}>
                  Free Trial
                </Button>
              </div>
            )
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
