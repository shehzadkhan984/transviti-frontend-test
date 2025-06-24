import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/common/Navbar";
import Dashboard from "~/components/common/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen relative  bg-background">
      <Navbar />
      <Dashboard />
      {/* Your content here */}
    </div>
  );
}
