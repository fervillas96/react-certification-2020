import React, { useContext, useReducer } from 'react';

const FavoritesContext = React.createContext(null);

function useFavoritesProvider() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return { ...state, [action.payload.id.videoId]: action.payload };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
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
