import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchStr, setSearchStr] = useState('');

  const handleInputChange = e => {
    setSearchStr(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchStr);
    setSearchStr('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <input type="text" value={searchStr} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
