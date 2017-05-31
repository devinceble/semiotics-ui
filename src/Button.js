import React, { PureComponent, PropTypes } from 'react'; // eslint-disable-line
import { TouchableHighlight, Text, StyleSheet } from 'react-native'; // eslint-disable-line
import Palette from './MainColors';

const propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

const defaultProps = {
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
      onPress,
    } = this.props;

    return (
      <TouchableHighlight
        style={[style.container, active ? style.active : style.nop]}
        onPress={onPress}
      >
        <Text>
          {label}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
