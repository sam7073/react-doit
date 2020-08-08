import React, { Component } from "react";

export default function withHoc(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name;
  return class WithHoc extends Component {
    static displayName = `withHoc(${wrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
