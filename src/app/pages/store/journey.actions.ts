import { createAction, props } from '@ngrx/store';
import { Journey } from 'src/app/models/journey.model';

export const GetJourney = createAction(
  'Get journey',
  props<{ origin: string, destination: string }>()
);

export const GetJourneySuccess = createAction(
  'Get journey success',
  props<{ journey?: Journey | null }>()
);

export const OnError = createAction(
  'Error Journey',
  props<{ error : any }>()
)