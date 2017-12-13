import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

const ErrorHandler = (props) => {
  const classes = classNames('bp-alert bp-alert--error', {
    'bp-slide-down': props.error
  });
  return (
    props.error ?
      <div className={classes}>
        <p className="bp-text bp-white">
          {props.error}
        </p>
      </div> :
      null
  );
};

ErrorHandler.propTypes = {
  error: React.PropTypes.string
};

ErrorHandler.defaultProps = {
  error: null
};

function mapStateToProps(state) {
  return { error: state.public.error };
}

export default connect(mapStateToProps, null)(ErrorHandler);
