import PropTypes from 'prop-types';

export default function Select({ label, value, options, onChange }) {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
};