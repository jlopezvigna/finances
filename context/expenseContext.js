import React, { createContext, useCallback, useReducer } from 'react';

export const ExpenseContext = createContext();
export const DEFAULT_VALUE = '';
const INITIAL_VALUES = {
  details: DEFAULT_VALUE,
  amount: DEFAULT_VALUE,
  categoryId: DEFAULT_VALUE,
  date: Date.now(),
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_EXPENSE': {
      return {
        ...state,
        expense: { ...state.expense, ...payload },
      };
    }

    default:
      return state;
  }
};

function ExpenseProvider({ children }) {
  const initial = {
    expense: {
      data: INITIAL_VALUES,
      loading: false,
      error: null,
    },
  };

  const [data, dispatch] = useReducer(reducer, initial);

  const setExpense = useCallback(
    (data = INITIAL_VALUES) => {
      dispatch({
        type: 'SET_EXPENSE',
        payload: { data },
      });
    },
    [dispatch],
  );

  return (
    <ExpenseContext.Provider
      value={{
        data,
        setExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;

export function useExpenseContext() {
  return React.useContext(ExpenseContext);
}
