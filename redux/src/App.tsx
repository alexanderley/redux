import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";
import { toggleTheme } from "./store/themeSlice";

function App() {
  const count = useSelector((state: any) => state.counter.value);
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>Theme: {theme}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </>
  );
}

export default App;
