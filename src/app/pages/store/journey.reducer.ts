import { createFeature, createReducer, on } from '@ngrx/store';
import * as  JourneyActions from './journey.actions';
import { Journey } from 'src/app/models/journey.model';

export const journeyFeatureKey = 'journeys';

export interface State {
  journey?: Journey | null;
  loading: boolean;
}

export const initialState: State = {
  journey: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(JourneyActions.GetJourney, state => ({
    ...state,
    journey: null,
    loading: true 
    })),
  on(JourneyActions.GetJourneySuccess, (state, { journey }) => ({
    ...state,
    journey,
    loading: false
  }))
);
