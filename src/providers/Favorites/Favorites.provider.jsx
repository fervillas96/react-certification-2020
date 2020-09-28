import React, { useContext, useReducer } from 'react';

const FavoritesContext = React.createContext(null);

function useFavoritesProvider() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavoriteProvider" without an FavoritesProvider!`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(
    (currentState, action) => {
      switch (action.type) {
        case 'ADD_FAVORITE':
          return {
            ...currentState,
            favorites: {
              ...currentState.favorites,
              [action.payload.id.videoId]: action.payload,
            },
          };
        case 'REMOVE_FAVORITE':
          // eslint-disable-next-line no-case-declarations
          const actualFavorites = currentState.favorites;
          delete actualFavorites[action.payload];
          return {
            ...currentState,
            favorites: {
              actualFavorites,
            },
          };
        default:
          return currentState;
      }
    },
    {
      favorites: {},
    }
  );

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { useFavoritesProvider, FavoritesContext };
export default FavoritesProvider;
