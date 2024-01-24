import React from 'react';
import { formatAgeGroup } from '@/src/lib/utils';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '../../components/ui/card';
import { ageGroups } from '../../config/content';

export default function AgeGroupItems() {
  const genders = ['male', 'female'];

  https: return (
    <>
      {genders.map((gender) =>
        ageGroups.map((ageGroup) => {
          const formattedAgeGroup = formatAgeGroup(ageGroup);
          return (
            <Link
              key={`${gender}-${ageGroup}`}
              href={`https://res.cloudinary.com/dfpbpun9z/image/upload/v1706012763/usaf-pt-calculator/score-charts/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
            >
              <Card
                className={`flex h-32 w-full items-center justify-center rounded-none shadow-2xl hover:scale-105 active:translate-y-1 ${
                  gender === 'male'
                    ? 'bg-blue-100 hover:bg-blue-200'
                    : 'bg-pink-100 hover:bg-pink-200'
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col items-center justify-center text-3xl capitalize">
                    <p>{gender}</p>
                    <p>{ageGroup}</p>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        }),
      )}
      ;
    </>
  );
}
