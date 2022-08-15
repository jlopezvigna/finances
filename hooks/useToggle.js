import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  const toggle = useCallback((state) => setState((prev) => (typeof state === 'boolean' ? state : !prev)), [setState]);

  return [state, toggle];
};

export default useToggle;
