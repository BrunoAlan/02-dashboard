// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware: Middleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
        }
    };
};
