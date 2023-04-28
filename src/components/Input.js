const Input = ({type, placeholder}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className="s-input" required />
    </>
  );
};

export default Input;
