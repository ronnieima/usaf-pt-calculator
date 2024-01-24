import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';
import { Video } from 'lucide-react';
import { Separator } from '../../ui/separator';
import ExerciseVideos from '../ExerciseVideos';
import { Exercise } from '@/src/config/content';

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
        className="text-primary flex gap-1 hover:scale-110 active:scale-105"
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
