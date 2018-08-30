import React, { Component } from 'react';

class Toggle extends Component {

  state = {
    on: true
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {active && render()}
      </div>
    );
  }
};

export default Toggle;
