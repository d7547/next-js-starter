'use client'
import  Badge  from "@/components/elements/Badge/Badge";
import ArticleCard from "@/components/modules/ArticleCard/ArticleCard";
import CompanyProfile from "@/components/modules/CompanyProfileCard/CompanyProfileCard";
import Header from "@/components/modules/Header/Header";
import Navbar from "@/components/modules/Navbar/Navbar";
import ThemeToggle from "@/components/modules/ThemeToggle/ThemeToggle";
import VideoCard from "@/components/modules/VideoCard/VideoCard";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function Home() {
  const [isPostBookmark, setPostBookmark] = useState(false)
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <Header /> */}
      <Navbar/>
      <main className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col items-center gap-4 w-auto  ">
          <CompanyProfile
          name="Cloudify Solutions"
          location="San Francisco, CA"
          logoLetter="C"
          description="Cloudify Solutions is a leader in transforming enterprise systems with AI and secure infrastructure."
          services={[
            "Cloud Data Services",
            "Artificial Intelligence",
            "Enterprise Software",
            "Data Center Automation",
            "Cloud Security",
            "Cyber Security",
          ]}
          videoDuration="2 min commercial"
          videoThumbnail="/assets/cloudify-thumbnail.jpg"
          featureBadge={<Badge text="Featured" className="absolute right-0 rounded-bl-md" />}
          onBookMeeting={() => console.log("Meeting Booked")}
          onFreeTrial={() => console.log("Trial Started")}
          onFollowToggle={(isFollowing) => console.log("Follow state:", isFollowing)}
        />
          <ArticleCard
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/dummy-img.jpg"
            readTime="11 minute read"
            views={4200}
            bookmark = { isPostBookmark ?<IconBookmark className="w-4 h-4 cursor-pointer" color = "grey" onClick={() => setPostBookmark(pre => !pre)} />: <IconBookmarkFilled className="w-4 h-4 cursor-pointer" color = "yellow" onClick={() => setPostBookmark(pre => !pre)} />}
      />
       <VideoCard
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        thumbnailUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        timestamp="3 months ago"
        views="25k"
      />

       </div>
      </main>
    </div>
  );
}
