import { Link as RouterLink } from "react-router";
import styles from "./link.module.css";

export const Link = ({ children, href, ...props }) => {
  const className = props.className || "";

  return (
    <RouterLink to={href} className={`${styles.link} ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};
