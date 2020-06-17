export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAME = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAME.LARGE]: 1128,
  [BREAKPOINT_NAME.MEDIUM]: 744,
  [BREAKPOINT_NAME.LARGE]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media(min-width:${
    breakpoints[BREAKPOINT_NAME.LARGE]
  }px)`,
};
// export default {
//   color: {
//     primary: '#03a9f4',
//     secondary: '#795548',
//     withe: '#fff',
//     gray: '#ccc',
//     default: '#999',
//   },
//   size: {
//     xg: 24,
//     lg: 18,
//     md: 14,
//     sm: 12,
//     xs: 10,
//   },
//   lineHight: {
//     xg: '60px',
//     lg: '54px',
//     md: '36px',
//     sm: '24px',
//     xs: '18px',
//   },
//   unit: 4,
// };
