import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mainFont } from './theme';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    box-sizing:border-box;
    ${mainFont}
  }
`;
export default GlobalStyles;
