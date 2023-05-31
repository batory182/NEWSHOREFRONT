import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ApiService } from 'src/app/services/api.service';
import * as JourneyActions from './journey.actions';
import { Journey } from 'src/app/models/journey.model';

import { UrlApis } from 'src/app/enums/api.ur';
import { Result } from 'src/app/models/result.model';
import { environment } from 'src/environments/environment';
@Injectable()
export class JourneyEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) { }

  loadJourneys$ = createEffect(
    () => this.actions$.pipe(
      ofType(JourneyActions.GetJourney),
      concatMap(props => this.apiService.getByRouteParams<Result<Journey>>([props.origin, props.destination], environment.urlBackend, UrlApis.Flights).pipe(
        map(response => {
          return JourneyActions.GetJourneySuccess({ journey: response.body?.Data })
        }),
        catchError(error => {
          console.error(error);
          console.log(error.message);
          return of(JourneyActions.OnError({ error }))
        })
      )
      )
    )
  );
}
