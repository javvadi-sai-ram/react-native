import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputComponentProps {
  placeholder: string;
  styles: any;
}

class InputComponent extends Component<InputComponentProps> {
  render() {
    const {placeholder, styles} = this.props;
    const container = StyleSheet.compose(styles, stylesheet.Css);
    return <TextInput placeholder={placeholder} style={container} />;
  }
}

export default InputComponent;

const stylesheet = StyleSheet.create({
  Css: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
