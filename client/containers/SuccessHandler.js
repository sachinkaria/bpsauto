import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

const SuccessHandler = (props) => {
  const classes = classNames('bp-alert bp-alert--success', {
    'bp-slide-down': props.success
  });
  return (
    props.success ?
      <div className={classes}>
        <p className="bp-text bp-white">
          {props.success}
        </p>
      </div> :
      null
  );
};

SuccessHandler.propTypes = {
  success: React.PropTypes.string
};

SuccessHandler.defaultProps = {
  success: null
};

function mapStateToProps(state) {
  return { success: state.public.success };
}

export default connect(mapStateToProps, null)(SuccessHandler);
