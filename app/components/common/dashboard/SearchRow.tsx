import { ChevronDown, Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

export default function SearchRow() {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md md:flex-row gap-3 mt-3">
      <Input
        placeholder="Job Title, Company, or Keywords"
        className=" border-0 shadow-none flex-1"
      />
      <div>
        <Separator
          orientation="vertical"
          className=" border-1 hidden md:block text-muted-foreground"
        />
        <Separator
          orientation="horizontal"
          className=" border-1 block md:hidden text-muted-foreground"
        />
      </div>

      <Button className=" bg-transparent cursor-pointer text-muted-foreground hover:bg-transparent    flex items-center border-0 shadow-none justify-between">
        Select Location <ChevronDown className="ml-2 h-4 w-4" />
      </Button>

      <div>
        <Separator
          orientation="vertical"
          className=" border-1 hidden md:block text-muted-foreground"
        />
        <Separator
          orientation="horizontal"
          className=" border-1 block md:hidden text-muted-foreground"
        />
      </div>
      <Button className=" bg-transparent text-muted-foreground cursor-pointer  hover:bg-transparent    flex items-center border-0 shadow-none justify-between">
        Job Type <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
      <Button className="bg-card cursor-pointer text-white px-6">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </div>
  );
}
