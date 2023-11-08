import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f0d48d;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  button:hover {
    background-color: goldenrod;
    color: white;
  }

  input {
    min-width: 200px;
    border: 1px solid goldenrod;
    border-radius: 4px;
  }
`;