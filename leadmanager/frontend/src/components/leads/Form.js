import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLead } from '../../actions/leads';

class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  state = {
    name: '',
    email: '',
    messages: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addLead(this.state);
    this.setState({ name: '', email: '', messages: '' });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, messages } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="messages"
              value={messages}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: 10 }}
          >
            ADD Lead
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
