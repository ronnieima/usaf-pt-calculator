'use client';
import { Switch } from '@/src/components/ui/switch';
import { Label } from '../ui/label';
import { useState } from 'react';
import { useFormStore } from '@/src/stores/store';

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
          aria-label="Toggle Shuttle Audio"
          checked={isCheckedShuttleAudio}
          onCheckedChange={toggleIsCheckedShuttleAudio}
        ></Switch>
        <Label htmlFor="showHamrAudio">Show HAMR Audio</Label>
      </div>
    </>
  );
}

export default ShowHamrAudioSwitch;
