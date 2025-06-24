import { ChevronDown, MapPin, Search, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SideBar from "./dashboard/SideBar";
import SearchRow from "./dashboard/SearchRow";
import { Badge } from "../ui/badge";
import JobListing from "./dashboard/JobListing";
import { Separator } from "../ui/separator";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 relative min-h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 relative lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <SideBar />

        {/* Right Content */}
        <main className="lg:col-span-3 space-y-6">
          {/* Search Header */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Find your Dream Job,{" "}
              <span className="text-blue-700">Albert!</span>
            </h2>
            <p className="text-sm text-gray-500">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>

            {/* Search Row */}
            <SearchRow />

            {/* Similar Tags */}
            <div className="mt-3 flex gap-2 items-center text-muted-foreground py-2 flex-wrap">
              <span>Similiar:</span>
              {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className=" p-2 space-x-2 text-muted-foreground border-gray-400 rounded-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Separator />
          </div>

          {/* Featured Jobs */}
          <JobListing
            name="Featured Jobs"
            count={4}
            promoted={true}
            link="/featured-jobs"
          />
          {/* Recommended Jobs */}
          <JobListing
            name="Recommended Jobs"
            count={8}
            promoted={false}
            link="/recommended-jobs"
          />
          {/* Latest Jobs */}

          <JobListing
            name="Latest Jobs"
            count={8}
            promoted={false}
            link="/latest-jobs"
          />
        </main>
      </div>
    </div>
  );
}
