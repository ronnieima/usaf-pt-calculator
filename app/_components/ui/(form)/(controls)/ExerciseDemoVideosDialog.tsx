import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Video } from "lucide-react";
import { Separator } from "../../(shadcn)/separator";
import ExerciseVideos from "../ExerciseVideos";
import { Exercise } from "@/app/content";

export default function ExerciseDemoVideosDialog({
  exercise,
}: {
  exercise: Exercise;
}) {
  return (
    <Dialog>
      <DialogTrigger
        title="Open video exercise demonstrations!"
        tabIndex={-1} // Prevents button from being focused with tab
        className="flex gap-1 text-primary hover:scale-110 active:scale-105"
      >
        <Video size={18} />
      </DialogTrigger>
      <DialogContent className=" max-h-[50svh] max-w-[80svh] overflow-y-scroll sm:max-h-[80svh]">
        <DialogHeader>
          <DialogTitle className="mb-4 text-2xl">
            {exercise.component.label} Exercise Demonstrations
          </DialogTitle>
          <Separator />
          <ExerciseVideos exercise={exercise} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
