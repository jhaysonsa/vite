//PascalCasing

function Message() {
  //JSX: javascript XML (babeljs.io/repl)
  const name = "jay";
  if (name) return <h1> Hello {name} </h1>;
  return <h1> Hello world </h1>;
}

export default Message;
