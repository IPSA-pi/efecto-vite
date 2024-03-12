import PropTypes from 'prop-types';

function Cell(props) {
  const cellStyle = {}
  return(
    <span className={props.className} ></span>
  );
}

Cell.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Cell;