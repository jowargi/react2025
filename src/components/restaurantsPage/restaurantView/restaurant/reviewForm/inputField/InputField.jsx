export default function InputField({
  type,
  id,
  name,
  value,
  onChange,
  labelText,
}) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
