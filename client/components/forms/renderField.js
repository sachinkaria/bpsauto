import React from 'react';
import classNames from 'classnames';

const renderField = (field) => {
  const classes = classNames('form-control bp-input', {
    'bp-input-error': field.meta.touched && field.meta.error
  });

  const inputClasses = classNames({
    'bp-flex': field.withAddon
  });

  return (
    <div className="bp-margin-bottom">
      <div className={inputClasses}>
        {field.withAddon && <span className="bp-addon">{field.addonText}</span>}
        <input className={classes} placeholder={field.placeholder} type={field.type} {...field.input} />
      </div>
      {field.meta.touched && field.meta.error && <div className="bp-red">{field.meta.error}</div>}
    </div>
  );
};

export default renderField;
