import styles from "./checkbox.module.css";

export const Checkbox = ({ label, ...rest }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.checkbox} {...rest} />

      {label}
    </label>
  );
};
