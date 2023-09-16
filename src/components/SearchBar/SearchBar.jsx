import { useState } from 'react';

import { useCustomContext } from '@/contexts/Provider';
import { ReactComponent as SearchIcon } from '@/icons/search.svg';
import { toast } from 'react-toastify';
import { Button, Form, Header, Input } from './SearchBar.styled';

const SearchBar = () => {
  const { handleSubmitValue } = useCustomContext();
  const [value, setValue] = useState('');

  const handleValueChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return toast.warning('No query entered yet...');
    }

    handleSubmitValue(value);
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

export default SearchBar;
