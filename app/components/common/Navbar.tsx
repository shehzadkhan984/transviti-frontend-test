// components/Navbar.tsx

import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const navLinks = [
  "Find Jobs",
  "Top Companies",
  "Job Tracker",
  "My Calendar",
  "Documents",
  "Messages",
  "Notifications",
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-10 py-4 sticky top-0 z-50 flex items-center justify-between  gap-8">
      {/* Left: Logo */}
      <div className="flex items-center gap-8 ">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex gap-6 text-sm text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`hover:text-card transition ${
                link === "Find Jobs" ? "font-semibold text-card" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Right: Search + Button + Avatar */}
      <div className="hidden lg:flex items-center gap-3 ">
        <div className="relative">
          <Input
            placeholder="Search"
            className="pl-10 rounded-md bg-gray-100 w-56"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
        </div>
        <Button className="bg-card hover:bg-card text-white rounded-md px-4">
          Resume Builder
        </Button>
        <Avatar className=" rounded-full shadow-sm  text-sm">
          <AvatarImage
            src="/assets/profile.png"
            className="h-10 w-10 border-0 object-cover "
          />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 shadow-md  rounded-lg left-0 right-0 bg-white z-50 p-4 flex flex-col gap-3 lg:hidden">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-700 hover:text-card">
              {link}
            </a>
          ))}
          <Input placeholder="Search" className="bg-gray-100" />
          <Button className="bg-card text-white">Resume Builder</Button>
        </div>
      )}
    </header>
  );
}
