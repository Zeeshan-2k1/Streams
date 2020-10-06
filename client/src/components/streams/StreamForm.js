import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="ui header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div
        style={{ padding: '2rem 0 1rem' }}
        className={`field ${meta.error && meta.touched ? 'error' : ''} `}
      >
        <label style={{ fontSize: '1.6rem' }}>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title:" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description:"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Enter the title';
  }

  if (!formValues.description) {
    errors.description = 'Enter the description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
