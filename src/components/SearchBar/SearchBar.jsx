import { useState } from 'react';

import { ReactComponent as SearchIcon } from '@/icons/search.svg';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Header, Input } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleValueChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return toast.warning('No query entered yet...');
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" aria-label="Search-button">
          <SearchIcon width="16" height="16" />
        </Button>
        <Input
          autoComplete="off"
          autoFocus
          name="value"
          onChange={handleValueChange}
          placeholder="Search images and photos"
          type="text"
          value={value}
        />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
