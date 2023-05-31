import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, journeyFeatureKey} from './journey.reducer'

const getJourneyState = createFeatureSelector<State>(journeyFeatureKey);

export const getJourney = createSelector(
    getJourneyState,
    (state: State) => state.journey
);

export const getLoading = createSelector(
    getJourneyState,
    (state: State) => state.loading
);