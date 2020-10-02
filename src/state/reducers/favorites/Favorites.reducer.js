import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../types';

export const initialState = { favorites: {} };

export default (currentState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...currentState,
        favorites: {
          ...currentState.favorites,
          [action.payload.id.videoId]: {
            ...action.payload,
            videoId: action.payload.id.videoId,
          },
        },
      };
    case REMOVE_FAVORITE:
      // eslint-disable-next-line no-case-declarations
      const actualFavorites = currentState.favorites;
      delete actualFavorites[action.payload];
      return {
        ...currentState,
        favorites: {
          ...actualFavorites,
        },
      };
    default:
      return currentState;
  }
};
