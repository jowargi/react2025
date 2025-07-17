export default function FormControls({ onClear, onSubmit }) {
  return (
    <div>
      <input type="button" value="Clear" onClick={onClear} />
      <input type="submit" value="Submit" onClick={onSubmit} />
    </div>
  );
}
