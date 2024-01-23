"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "../(shadcn)/label";
import { useState } from "react";
import { useFormStore } from "@/app/stores/store";

function ShowHamrAudioSwitch() {
  const isCheckedShuttleAudio = useFormStore(
    (state) => state.isCheckedShuttleAudio,
  );
  const toggleIsCheckedShuttleAudio = useFormStore(
    (state) => state.toggleIsCheckedShuttleAudio,
  );

  return (
    <>
      <div className="flex items-center gap-2">
        <Switch
          id="showHamrAudio"
          checked={isCheckedShuttleAudio}
          onCheckedChange={toggleIsCheckedShuttleAudio}
        ></Switch>
        <Label htmlFor="showHamrAudio">Show HAMR Audio</Label>
      </div>
    </>
  );
}

export default ShowHamrAudioSwitch;
