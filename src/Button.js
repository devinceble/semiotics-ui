import React, { PureComponent, PropTypes } from 'react'; // eslint-disable-line
import { View, Text, StyleSheet } from 'react-native'; // eslint-disable-line

const propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
};

const defaultProps = {
  active: false,
  label: 'Button',
};

class Button extends PureComponent {
  render() {
    const { label, active } = this.props;
    return (
      <View style={(active) ? { backgroundColor: '#beb' } : { backgrondColor: '#cbc' }}>
        <Text>
          {label}
        </Text>
      </View>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
