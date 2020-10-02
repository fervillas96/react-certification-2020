import React, { useContext, useReducer } from 'react';
import { favoritesReducer, favoritesInitialState } from '../../state/reducers/favorites';

const FavoritesContext = React.createContext(null);

function useFavoritesProvider() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavoriteProvider" without an FavoritesProvider!`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState);

  const setAsFavorite = (currentVideo) => {
    dispatch({ type: 'ADD_FAVORITE', payload: currentVideo });
  };

  const removeFromFavorite = (videoId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: videoId });
  };

  return (
    <FavoritesContext.Provider
      value={{ setAsFavorite, removeFromFavorite, state, dispatch }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { useFavoritesProvider, FavoritesContext };
export default FavoritesProvider;
