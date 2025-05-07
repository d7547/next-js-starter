import { IconEye, IconThumbUp } from "@tabler/icons-react";
import { FC } from "react";


interface StatsProps {
  views: string;
  timestamp: string;
}

const StatsRow: FC<StatsProps> = ({ views, timestamp }) => {
  return (
    <div className="flex justify-between items-center border-t text-sm text-gray-500 px-4 ">
    <div className="flex py-3 items-center gap-2  cursor-pointer hover:text-gray-700">
      <IconThumbUp className="w-5 h-5" />
      <span>Like</span>
    </div>

    <div className="flex items-center border-l px-2    gap-4">
      <span className="border-r px-2 py-3">{timestamp}</span>
      <div className="flex items-center  gap-1">
        <IconEye className="w-4 h-4" />
        <span>{views} views</span>
      </div>
    </div>
  </div>
  );
};

export default StatsRow;
