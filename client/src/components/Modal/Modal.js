import React, { Component } from 'react';

class Modal extends Component {

  state = {
    on: true
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    const { render } = this.props;
    return (
      render()
    );
  }
};

export default Modal;