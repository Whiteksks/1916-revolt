import { Info } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HintButtonProps {
  hintContent: string;
}

export function HintButton({ hintContent }: HintButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-6 h-6 p-0 text-foreground hover:text-foreground cursor-pointer"
          aria-label="more info"
        >
          <Info className="h-4 w-4" /> 
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-80 text-sm p-3 border bg-popover text-popover-foreground shadow-lg" 
        side="top" 
        align="start"
      >
        <p className="mt-1 text-muted-foreground">{hintContent}</p>
      </PopoverContent>
    </Popover>
  );
}
