import { css } from 'styled-components';

export const LARGE_AND_ABOVE = 'largeAndAbove';

export const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

export const breackpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

export const responsive = {
  // largeAndAbove : @media (min-width: 1128px),
  // small : @media (max-width: 743px)
  // print: @media print
  [LARGE_AND_ABOVE]: `@media (min-width : ${
    breackpoints[BREAKPOINT_NAMES.LARGE]
  }px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${
    breackpoints[BREAKPOINT_NAMES.MEDIUM] - 1
  }px)`,
  print: `@media print`,
};

export const unit = 4;

export const theme = {
  black: '#333',
  white: '#fff',
  lightGray: '#f8f8f8',
  middleGray: '#ddd',
  darkGray: '#888',
  point: 'blue',
  neutral: 'beige',
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mainFont = css`
  font-family: 'Noto Sans KR', sans-serif;
`;

export default {
  depth: {
    level1: {
      boxShadow: `0 2px 2px 0 rgba(0,0,0,0.14)`,
    },
    level2: {
      boxShadow: `0 4px 5px 0 rgba(0,0,0,0.14)`,
    },
    level3: {
      boxShadow: `0 8px 17px 12px rgba(0,0,0,0.14)`,
    },
  },
};
