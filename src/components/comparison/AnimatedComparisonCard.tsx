import { motion, useAnimation } from "framer-motion";
import ComparisonCard from "./ComparisonCard";
import { useState } from "react";

interface AnimatedComparisonCardProps {
  name: string;
  image: string;
  direction: "left" | "right";
  onSwipe: (direction: "left" | "right") => void;
}

function AnimatedComparisonCard(props: AnimatedComparisonCardProps) {
  const controls = useAnimation();
  const [isDragging, setDragging] = useState(false);

  const swipeX = props.direction === "left" ? -300 : 300;

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={() => setDragging(true)}
      onDragEnd={(_, info) => {
        setDragging(false);

        if (props.direction === "left" && info.offset.x < -120) {
          controls.start({ x: swipeX, opacity: 0 });
          props.onSwipe("left");
        }

        if (props.direction === "right" && info.offset.x > 120) {
          controls.start({ x: swipeX, opacity: 0 });
          props.onSwipe("right");
        }
      }}
      animate={controls}
      style={{ touchAction: "none" }}
    >
      <ComparisonCard name={props.name} image={props.image} />
    </motion.div>
  );
}

export default AnimatedComparisonCard;
