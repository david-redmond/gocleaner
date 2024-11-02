import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

interface IProps {
  value: number;
  setRooms: (arg: number) => void;
  title: string;
}
const RoomSelector = ({ value, setRooms, title }: IProps) => {
  const [isEditing, setIsEditing] = React.useState(false); // State to toggle button visibility

  // Function to increment rooms
  const incrementRooms = () => {
    setRooms(value + 1);
  };

  // Function to decrement rooms
  const decrementRooms = () => {
    setRooms(value > 1 ? value - 1 : 1); // Ensure it doesn't go below 1
  };

  // Handle keyboard interactions for accessibility
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsEditing(true);
    }
  };

  return (
    <div
      className="room-selector"
      onClick={() => setIsEditing(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make it focusable for keyboard users
      onMouseEnter={() => setIsEditing(true)}
      onMouseLeave={() => setIsEditing(false)} // Hide buttons on mouse leave
      onFocus={() => setIsEditing(true)} // Show buttons on focus
      onBlur={() => setIsEditing(false)} // Hide buttons on blur
      aria-label={`Select number of ${title}`}
      role="button" // Indicate that this div acts as a button
    >
      {isEditing && (
        <RemoveCircleOutlineOutlinedIcon
          className="decrement button"
          onClick={decrementRooms}
        />
      )}
      <div className="inputGroup">
        {value} {title}
      </div>
      {isEditing && (
        <AddCircleOutlineOutlinedIcon
          className="button"
          onClick={incrementRooms}
        />
      )}
    </div>
  );
};

export default RoomSelector;
