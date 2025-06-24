import { Bookmark, BookMarked, Clock, MapPin, Save } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

export default function JobListing(props: {
  name: string;
  link: string;
  count: number;
  promoted: boolean;
}) {
  return (
    <div>
      <div className="flex  items-center mb-2 gap-3">
        <h3 className="text-lg font-semibold">{props?.name}</h3>
        <a
          href={props.link ?? "#"}
          className="text-[#0154AA] text-sm font-medium underline"
        >
          See {props?.name}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: props?.count ?? 4 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
            {props?.promoted && (
              <p className="text-xs text-[#0154AA] font-medium mb-2">
                Promoted
              </p>
            )}
            <div className=" flex  items-center gap-2 ">
              <div>
                <img
                  src="/assets/teams.png"
                  className="h-10 w-10 border-0 rounded-full object-contain "
                />
                {/* <Avatar className=" rounded-full shadow-sm  text-sm">
                  <AvatarImage
                    src="/assets/teams.png"
                    className="h-12 w-12 border-0 object-contain "
                  />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar> */}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">UI/UX Designer</h4>
                <p className="text-gray-500 text-xs mb-2">Teams</p>
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-xs mb-1">
              <MapPin className="w-3 h-3 mr-1" />
              Seattle, USA (Remote)
            </div>
            <div className="text-gray-400 flex items-center text-xs mb-3">
              <Clock className="w-3 h-3 mr-1" /> 1 day ago |{" "}
              <span className=" text-[#0154AA]"> 22 applicants</span>
            </div>
            <div className=" flex items-center justify-between gap-4 ">
              <Button className="bg-card flex-1 cursor-pointer text-white w-full">
                Apply Now
              </Button>
              <Bookmark className="cursor-pointer text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
