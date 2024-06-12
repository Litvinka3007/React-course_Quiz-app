import PropTypes from 'prop-types';

export default function CustomButton({ className, children }) {
  return <button className={className}>{children}</button>;
}  

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};