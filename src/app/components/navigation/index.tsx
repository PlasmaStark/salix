"use client";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
};

export default Navigation;