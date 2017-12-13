import React from 'react';
import classNames from 'classnames';

const renderInputBox = (field) => {
  const classes = classNames('form-control bp-input', {
    'bp-input-error': field.meta.touched && field.meta.error
  });

  return (
    <div className="bp-margin-bottom">
      <textarea className={classes} rows={6} placeholder={field.placeholder} {...field.input} />
      {field.meta.touched && field.meta.error && <div className="bp-red">{field.meta.error}</div>}
    </div>
  )
};

export default renderInputBox;
