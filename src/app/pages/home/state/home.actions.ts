import { createAction, props } from '@ngrx/store'

export const changeText = createAction(
    '[Home] Chang Text',
    props<{ text: string }>(),
);