'use client';
import { ExerciseComponentValues } from '@/src/config/content';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../ui/input';

const DurationPicker = ({
  componentValue,
}: {
  componentValue: ExerciseComponentValues;
}) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const { setValue } = useFormContext();
  useEffect(() => {
    const totalSeconds = minutes * 60 + seconds;
    setValue(`${componentValue}Input`, totalSeconds);
  }, [minutes, seconds, setValue, componentValue]);

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setSeconds(value);
    }
  };

  return (
    <div className="flex items-center gap-2" key={componentValue}>
      <div className="flex flex-col items-start">
        <label htmlFor="minutes" className="text-xs">
          Minutes
        </label>
        <Input
          id="minutes"
          type="number"
          className=" rounded-md border border-gray-300 text-center shadow-md focus:outline-black"
          max={60}
          maxLength={2}
          min={0}
          value={minutes?.toString().padStart(2, '0')}
          onChange={handleMinutesChange}
          placeholder="mm"
        />
      </div>
      <span className="text-gray-600">:</span>
      <div className="flex flex-col items-start">
        <label htmlFor="seconds" className="text-xs">
          Seconds
        </label>
        <Input
          id="seconds"
          type="number"
          className="rounded-md border border-gray-300 px-3 text-center shadow-md focus:outline-black"
          maxLength={2}
          max={60}
          min={0}
          value={seconds?.toString().padStart(2, '0')}
          onChange={handleSecondsChange}
          placeholder="ss"
        />
      </div>
    </div>
  );
};

export default DurationPicker;
