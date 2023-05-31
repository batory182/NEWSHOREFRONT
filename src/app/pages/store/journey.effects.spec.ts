import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JourneyEffects } from './journey.effects';

describe('JourneyEffects', () => {
  let actions$: Observable<any>;
  let effects: JourneyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JourneyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(JourneyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
