"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 32 }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M47.9398 87.2648C42.4502 74.935 47.9953 60.4896 60.3251 55L85.9004 112.443C91.39 124.773 85.8449 139.218 73.5151 144.708L47.9398 87.2648Z"
      fill="white"
    />
    <path
      d="M90.6181 87.2648C85.1285 74.935 90.6736 60.4896 103.003 55L128.579 112.443C134.068 124.773 128.523 139.218 116.193 144.708L90.6181 87.2648Z"
      fill="white"
    />
    <path
      d="M137.242 79.4926C137.242 65.996 148.183 55.0548 161.68 55.0548V70.706C161.68 84.2026 150.739 95.1438 137.242 95.1438V79.4926Z"
      fill="white"
    />
  </svg>
);
