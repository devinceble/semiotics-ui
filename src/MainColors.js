import { StyleSheet } from 'react-native'; // eslint-disable-line
import * as COLOR from './Colors';

const style = {
  Primary: {
    main: COLOR.green200,
    light: COLOR.green100,
    dark: COLOR.green700,
  },
  Secondary: {
    main: COLOR.grey200,
    light: COLOR.grey100,
    dark: COLOR.grey700,
  },
  Status: {
    default: COLOR.grey200,
    active: COLOR.blue300,
    warning: COLOR.orange300,
    inactive: COLOR.grey100,
    success: COLOR.green300,
    error: COLOR.red300,
  },
};

export default style;
