import { FC } from "react";

interface IconButtonProps {
  icon: React.ElementType;
}

const IconButton: FC<IconButtonProps> = ({ icon: Icon }) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
      aria-label="icon-button"
    >
      <Icon className="h-5 w-5 text-gray-600" />
    </button>
  );
};

export default IconButton;
