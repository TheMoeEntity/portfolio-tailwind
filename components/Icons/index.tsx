import React from "react";
import { IconName } from "boxicons";

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = "24px",
  color = "",
}) => {
  return (
    <i
      className={`bx ${className} ${name}`}
      style={{ fontSize: size, color }}
    />
  );
};

export default Icon;
