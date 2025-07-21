import styles from "./TextareaField.module.css";
import classNames from "classnames";

export default function TextareaField({
  id,
  name,
  value,
  onChange,
  labelText,
  themeColor = "light",
}) {
  return (
    <div className={styles["textarea-field"]}>
      <label
        htmlFor={id}
        className={classNames(
          styles.label,
          styles[`label--theme-color-${themeColor}`]
        )}
      >
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(
          styles.textarea,
          styles[`textarea--theme-color-${themeColor}`]
        )}
      />
    </div>
  );
}
