import styles from "./label.module.css";

export const Label = ({ children, ...rest }) => {
  return (
    <label className={styles.label} {...rest}>
      {children}
    </label>
  );
};
