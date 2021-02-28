import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter find contact"
      />
    </label>
  );
};
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
