import React, { Component } from 'react';

export default function withExp(WrapperComponent) {
  const value = 20;
  return class extends Component {
    render() {
      return <WrapperComponent {...this.props} value={value} />;
    }
  };
}
