import { createContext, useContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

const Context = createContext();

export const useCustomContext = () => useContext(Context);

const Provider = ({ children }) => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  const handleError = error => setError(error);
  const handleSubmit = value => setValue(value);

  const providerValue = useMemo(() => {
    return { error, value, handleError, handleSubmit };
  }, [error, value]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
