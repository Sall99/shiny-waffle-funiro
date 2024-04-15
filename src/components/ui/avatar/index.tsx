import Image from "next/image";
import React from "react";

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = 40,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
      width={100}
      height={100}
    />
  );
};
