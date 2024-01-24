import { formatAgeGroup } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function ScoreChartLink() {
  const { watch } = useFormContext();
  const gender = watch('gender');
  const ageGroup = watch('ageGroup');

  const formattedAgeGroup = formatAgeGroup(ageGroup);
  return (
    <>
      {gender && ageGroup && (
        <p className="text-center text-lg tracking-tight">
          View the <span className="text-xl font-semibold">{gender}</span> /{' '}
          <span className="text-xl font-semibold">{ageGroup}</span> score chart{' '}
          <Link
            href={`https://res.cloudinary.com/dfpbpun9z/image/upload/v1706012763/usaf-pt-calculator/score-charts/scorechart_${gender}_${formattedAgeGroup}.pdf`}
            target="_blank"
            className="text-primary hover:text-primary/50"
          >
            here
          </Link>
        </p>
      )}
    </>
  );
}

export default ScoreChartLink;
