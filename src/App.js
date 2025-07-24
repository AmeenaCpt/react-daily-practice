import './App.css';
function Greeting() {
  const name = "Ameena";
  return <h2>Hello, {name}! Welcome to JSX.</h2>;
}

export default function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

