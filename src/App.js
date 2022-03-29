import "./styles.css";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Label = (props) => {
  return (
    <div>
      <label>{props.text}</label>
      <input type={props.type} name={props.name} required />
    </div>
  );
};

const Submit = () => {
  return <div className="button">Login</div>;
};

const App = () => {
  return (
    <div className="App">
      <Header text="Login Form" />
      <Label text="Username" name="Username" type="text" />
      <Label text="Password" name="Password" type="password" />
      <Submit />
    </div>
  );
};
export default App;
