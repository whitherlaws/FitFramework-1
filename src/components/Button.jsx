function Button({ className, onClick, text }) {
  return (
    <button
      className={className ? `btn-component ${className}` : "btn-component"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
