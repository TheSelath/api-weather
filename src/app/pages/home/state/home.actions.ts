import { createAction, props } from '@ngrx/store'

export const loadCorrentWeather = createAction(
    '[Home] Load Corrent Weather',
    props<{ query: string}>(),
);

export const loadCorrentWeatherSuccess = createAction(
    '[Weather API] Load Corrent Weather Success',
    props<{ entity: any}>(),
);
export const loadCorrentWeatherFailed = createAction(
    '[Weather API] Load Corrent Weather Failed',
);