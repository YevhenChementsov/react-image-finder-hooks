/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

const Context = createContext();

const Provider = ({ children }) => {
  const [value, setValue] = useState('');

  const handleSubmitValue = value => setValue(value);

  const providerValue = useMemo(() => {
    return { value, handleSubmitValue };
  }, [value]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
export const useCustomContext = () => useContext(Context);
