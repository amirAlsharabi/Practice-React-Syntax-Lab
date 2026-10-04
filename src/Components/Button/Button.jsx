import "./Button.css";

function Button() {
  function handleClick() {
    console.log("hello world");
  }
  return (
    <>
      <p className="btn" onClick={handleClick}>
        Upload
      </p>
    </>
  );
}

export default Button;
