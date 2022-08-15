import React, { createContext, useCallback, useReducer } from 'react';

export const CategoryContext = createContext();
export const DEFAULT_NAME = '';
export const DEFAULT_COLOR = '#9B9B9B';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: { ...state.category, ...payload },
      };
    }

    default:
      return state;
  }
};

function CategoryProvider({ children }) {
  const initial = {
    category: {
      data: {
        name: DEFAULT_NAME,
        color: DEFAULT_COLOR,
      },
      loading: false,
      error: null,
    },
  };

  const [data, dispatch] = useReducer(reducer, initial);

  const setCategory = useCallback(
    (data = { name: DEFAULT_NAME, color: DEFAULT_COLOR }) => {
      dispatch({
        type: 'SET_CATEGORY',
        payload: { data },
      });
    },
    [dispatch],
  );

  return (
    <CategoryContext.Provider
      value={{
        data,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;

export function useCategoryContext() {
  return React.useContext(CategoryContext);
}
