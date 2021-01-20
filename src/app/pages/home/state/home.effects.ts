import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";

import * as fromHomeActions from './home.actions';
import { WeatherService } from "src/app/shared/services/weather.service";

@Injectable()

export class HomeEffects {
    
    loadCorrentWeather$ = createEffect(() =>this.actions$
        .pipe(
            ofType(fromHomeActions.loadCorrentWeather),
            mergeMap(({ query}) => this.weatherService.getCityWeatherByQuery(query)),
            catchError((err, caught$) => {
                
                return caught$;
            }),
            map((entity: any) => fromHomeActions.loadCorrentWeatherSuccess({entity})),
        ),
    );

    constructor(private actions$: Actions,
                private store: Store,
                private weatherService: WeatherService) {        
    }
}