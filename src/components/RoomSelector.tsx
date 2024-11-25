import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import analyticsEventTracking from "@/app/utils/analyticsEventTracking";

interface IProps {
  value: number;
  setRooms: (arg: number) => void;
  title: string;
  autofocus?: boolean;
}
const RoomSelector = ({ value, setRooms, title, autofocus }: IProps) => {
  const [isEditing, setIsEditing] = React.useState(autofocus); // State to toggle button visibility

  // Function to increment rooms
  const incrementRooms = () => {
    setRooms(value + 1);
    analyticsEventTracking({
      action: 'button_click',
      category: 'User Interaction',
      label: `incrementRooms${title}`,
      value: value + 1,
    });
  };

  // Function to decrement rooms
  const decrementRooms = () => {
    const newValue = value > 1 ? value - 1 : 1
    setRooms(newValue); // Ensure it doesn't go below 1
    analyticsEventTracking({
      action: 'button_click',
      category: 'User Interaction',
      label: `decrement${title}`,
      value: newValue,
    });
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
