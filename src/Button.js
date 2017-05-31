import React, { PureComponent, PropTypes } from 'react'; // eslint-disable-line
import { TouchableHighlight, Text, StyleSheet } from 'react-native'; // eslint-disable-line
import Palette from './MainColors';

const propTypes = {
  userStyle: PropTypes.style,
  active: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

const defaultProps = {
  userStyle: {},
  active: false,
  label: 'Button',
  onPress: () => {},
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Palette.Status.default,
    padding: 16,
  },
  active: {
    backgroundColor: Palette.Status.active,
  },
  nop: {},
});

class Button extends PureComponent {
  render() {
    const {
      label,
      active,
      userStyle,
      onPress,
    } = this.props;

    return (
      <TouchableHighlight
        style={[style.container, active ? style.active : style.nop, userStyle.style]}
        underlayColor={Palette.Secondary.light}
        onPress={onPress}
      >
        <Text style={userStyle.text}>
          {label}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
