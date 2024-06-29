export type ExerciseValues =
  | UpperBodyExercises
  | CoreExercises
  | CardioExercises;

export type UpperBodyExercises =
  | 'exempt'
  | 'pushup'
  | 'hand_release_pushup'
  | 'situp';

export type CoreExercises =
  | 'exempt'
  | 'situp'
  | 'cross_leg_reverse_crunch'
  | 'forearm_plank';

export type CardioExercises =
  | 'exempt'
  | '1.5_mile_run'
  | '2km_walk'
  | '20_meter_hamr_shuttle';

export type ExerciseComponentValues = 'upperBody' | 'core' | 'cardio';

export type ExerciseComponent = {
  label: string;
  value: ExerciseComponentValues;
};

export type ExerciseOptions = {
  label: string;
  value: ExerciseValues;
  videoUrl?: string;
  videoSource?: string;
}[];

export type Exercise = {
  component: ExerciseComponent;
  options: ExerciseOptions;
};

export const exercises: Exercise[] = [
  {
    component: {
      label: 'Upper Body',
      value: 'upperBody',
    },

    options: [
      {
        label: 'Pushup',
        value: 'pushup',
        videoUrl: 'DGj2EK4URjk',
        videoSource: 'https://www.youtube.com/watch?v=z6cNHsw-EWI',
      },
      {
        label: 'Hand Release Pushup',
        value: 'hand_release_pushup',
        videoUrl: 'H-IQOmYTwgI',
        videoSource:
          'https://www.dvidshub.net/video/825278/2-minute-hand-release-pushup',
      },
      {
        label: 'Exempt ',
        value: 'exempt',
      },
    ],
  },

  {
    component: {
      label: 'Core',
      value: 'core',
    },
    options: [
      {
        label: 'Situp',
        value: 'situp',
        videoUrl:'x5blKIwnjD4',
        videoSource: 'https://www.youtube.com/watch?v=z6cNHsw-EWI',
      },
      {
        label: 'Cross Leg Reverse Crunch',
        value: 'cross_leg_reverse_crunch',
        videoUrl: 'VcrcqPK4Fek',
        videoSource:
          'https://www.dvidshub.net/video/825274/2-minute-cross-leg-reverse-crunch',
      },
      {
        label: 'Forearm Plank',
        value: 'forearm_plank',
        videoUrl: 'SfLQfCPOkHw',
        videoSource: 'https://www.dvidshub.net/video/825280/forearm-plank',
      },
      {
        label: 'Exempt ',
        value: 'exempt',
      },
    ],
  },
  {
    component: {
      label: 'Cardio',
      value: 'cardio',
    },
    options: [
      {
        label: '1.5 Mile Run',
        value: '1.5_mile_run',
        videoUrl: 'AzGGq5CoFzo',
        videoSource: 'https://www.youtube.com/watch?v=z6cNHsw-EWI',
      },
      {
        label: '20 Meter HAMR Shuttle',
        value: '20_meter_hamr_shuttle',
        videoUrl: 'l68Q0IPdojc',
        videoSource:
          'https://www.dvidshub.net/video/825282/20m-high-aerobic-multi-shuttle-run',
      },
      {
        label: '2 Kilometer Walk',
        value: '2km_walk',
        videoUrl: 'AFOW2IsiBIs',
        videoSource: 'https://www.youtube.com/watch?v=z6cNHsw-EWI',
      },
      {
        label: 'Exempt',
        value: 'exempt',
      },
    ],
  },
];

export const walkStandardsAgeGroups = ['<30', '30-39', '40-49', '50-59', '60+'];
export const ageGroups = [
  '<25',
  '25-29',
  '30-34',
  '35-39',
  '40-44',
  '45-49',
  '50-54',
  '55-59',
  '>60',
];
