const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.username}
      onChange={props.onChange}
      onBlur = {props.onBlur}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
