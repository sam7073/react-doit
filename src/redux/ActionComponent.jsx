import React, { PureComponent } from "react";

export default class ActionComponent extends PureComponent {
  render() {
    const { setAge } = this.props;
    return (
      <React.Fragment>
        <button onClick={() => setAge(2, 55)} />
      </React.Fragment>
    );
  }
}
