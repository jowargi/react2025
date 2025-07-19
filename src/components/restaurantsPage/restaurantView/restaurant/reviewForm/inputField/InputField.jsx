import styles from "./InputField.module.css";
import classNames from "classnames";

export default function InputField({
  type,
  id,
  name,
  value,
  onChange,
  labelText,
  themeColor = "light",
}) {
  return (
    <div className={styles["input-field"]}>
      <label
        htmlFor={id}
        className={classNames(
          styles.label,
          styles[`label--theme-color-${themeColor}`]
        )}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(
          styles.input,
          styles[`input--theme-color-${themeColor}`]
        )}
      />
    </div>
  );
}
