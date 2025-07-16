export default function Counter({ count, decrement, increment }) {
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
