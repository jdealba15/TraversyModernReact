import Rating from "./components/Rating";

const App = () => {
  const name = 'Brad';
  return (
    <div>
      <h1>Hello {name}</h1>
      <Rating />
      <Rating />
      <Rating />
    </div>
  );
};
 
export default App;