export default function TextareaField({
  id,
  name,
  value,
  onChange,
  labelText,
}) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={{ resize: "none" }}
      />
    </div>
  );
}
