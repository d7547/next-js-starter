"use client";

import { Avatar } from "@/components/elements/Avatar/Avatar";
import Image from "next/image";
import NavItem from "../NavItem/NavItem";
import IconButton from "../IconButton/IconButton";
import { IconBell, IconQuestionMark } from "@tabler/icons-react";

const Navbar = () => {
    const QuestionmarkIcon = () =>{
        return <IconQuestionMark className="border-[2px] border-bismarkLight text-bismarkLight  rounded-full" size={20} />
    }
    const BellIcon =() =>{
        return <IconBell className="  text-bismarkLight  rounded-full" size={21} />
    }
  return (
    <header
      className="w-full bg-white border-b shadow-sm "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Image src="/logo.png" alt="Logo" width={100} height={32} />

          {/* Nav Items */}
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <NavItem label="Home Feed" />
            <NavItem label="AI Solutions" />
            <NavItem label="Top AI" active />
            <NavItem label="Newsfeed" />
            <NavItem label="Podcasts" />
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <IconButton icon={QuestionmarkIcon} />
          <IconButton icon={BellIcon} />
          <Avatar src="/images/dummy-img.jpg"  />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
