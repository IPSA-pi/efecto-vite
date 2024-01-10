import Cell from './Cell';
import PropTypes from 'prop-types';

function Row(props) {
  const bString = props.value;
  const rowClass = `row ${props.className}`;
  const RowStyle = {
    display: 'flex',
    flexDirection: 'row'
  };

  return (
    <div className={rowClass} style={RowStyle}>
      {
        bString
          .split('')
          .map((char, index) => 
            char === '0' 
              ? <Cell 
                  className={rowClass + ` cell ${index} cero` } 
                  key={index} 
                  value={char}/>
              : <Cell 
                  className={rowClass + ` cell ${index} uno`} 
                  key={index} 
                  value={char}/>)
      } 
    </div>
  );
}

Row.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Row;