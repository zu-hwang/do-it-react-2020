import ThemeStylesSheet from 'react-with-styles/lib/ThemeStylesSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemeStylesSheet.registerTheme(Theme);
ThemeStylesSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesPropTypes, ThemeStylesSheet };
export default withStyles;
