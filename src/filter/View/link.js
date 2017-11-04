import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {setFilter} from '../actions';

const Link = ({ active, children,onClick }) => {
  if (active) {
    return <b className="filter-item selected">{children}</b>;
  }
  return (
    <a
      className="filter-item"
      onClick={e => {
        console.log(e);
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
