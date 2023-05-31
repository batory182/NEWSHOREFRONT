import { Injectable } from '@angular/core';
import * as JourneyActions from '../store/journey.actions';
import * as JourneySelectors from '../store/journey.selectors';
import { Journey } from 'src/app/models/journey.model';
import { Store, select } from '@ngrx/store';
import { State } from '../store/journey.reducer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(
    private store: Store<State>
  ) { }
  GetJourney(origin: string, destination: string ): void{
    this.store.dispatch(JourneyActions.GetJourney({origin, destination}));
  }
  getJourney(): Observable<Journey|null|undefined>
  {
    return this.store.pipe(select(JourneySelectors.getJourney));
  }
  getLoading(): Observable<boolean>{
    return this.store.pipe(select(JourneySelectors.getLoading))
  }
}
