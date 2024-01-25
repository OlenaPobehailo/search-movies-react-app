import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
 
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul, ol, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
  display: block;
  max-width: 100%;
  height: auto;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


a{
    text-decoration: none;
    color: inherit;
};

.container {
  margin: 80px 0;
}

.flex-column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
`;
