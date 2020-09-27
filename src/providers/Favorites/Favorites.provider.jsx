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
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return { ...currentState, [action.payload.id.videoId]: action.payload };
      case 'REMOVE_FAVORITE':
        return {
          ...currentState,
        };
      default:
        break;
    }
  }, {});

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { useFavoritesProvider };
export default FavoritesProvider;
