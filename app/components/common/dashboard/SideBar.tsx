import {
  ArrowBigDown,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function SideBar() {
  return (
    <aside className="w-full  max-w-sm mx-auto md:max-w-none  lg:col-span-1 space-y-4">
      {/* Profile Card */}
      <div className="bg-white rounded-xl pb-4 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="relative pb-10 w-full">
            <div className="w-full h-24 rounded-t-xl overflow-hidden">
              <img
                src="/assets/banner.png"
                alt="Avatar 1"
                className="rounded-t-xl h-full w-full object-cover"
              />
            </div>
            <Avatar className="h-20 w-20 border absolute top-16 left-1/2 -translate-x-1/2 border-white shadow">
              <AvatarImage src="/assets/profile.png" />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex px-4 sm:px-8 flex-col items-center text-center">
            <h2 className="mt-4 font-semibold text-lg">Albert Flores</h2>
            <p className="text-xs text-gray-500 mt-1 text-center px-2">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web…
            </p>
            <p className="text-sm text-gray-400 mt-1">Clinton, Maryland</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-3 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Profile Visitors</span>
          <span className="text-[#0154AA] font-semibold">140</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-gray-500">
          <span>Resume Viewers</span>
          <span className="text-[#0154AA] font-semibold">20</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-gray-500">
          <span>My Jobs</span>
          <span className="text-[#0154AA] font-semibold">88</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white flex items-center justify-between rounded-xl shadow-sm p-4 text-sm">
        <div>
          <p className="font-semibold">My calendar</p>
          <p className="text-gray-400 text-xs">Upcoming Interviews</p>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>
    </aside>
  );
}
