import { React, useState } from "react";
import Stars from "./Stars";

export default function StarRatings(){
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(10);
    // const numberOfStars = 10;
    const starsArray = Array(hoveredIndex).fill(null);
    // console.log(starsArray)
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
      const handleMouseLeave = () => {
        console.log("handleMouseLeave")
        setHoveredIndex(null);
      };
    console.log("starsArray")
    return(
        <>
            <div className="stars_wrapper">
                {starsArray.map((_, hoveredIndex) => (
                    <div key={hoveredIndex} onMouseEnter={() => handleMouseEnter(hoveredIndex)} onMouseLeave={handleMouseLeave}>
                        <Stars onMouseEnter={() => handleMouseEnter(hoveredIndex)} key={hoveredIndex} isHovered={isHovered} setIsHovered ={setIsHovered } starsArray={starsArray} onMouseLeave={handleMouseLeave}/>
                    </div>
                ))}
                {hoveredIndex !== null && (
  <span>Currently hovering over item at index: {hoveredIndex}</span>
)}
            </div>
        </>
    )
}