export const Input = ({ className = '', ...props }) => {
  return <input className={`text-red-500 ${className}`} {...props} />;
};

export default Input;
