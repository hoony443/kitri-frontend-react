import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, fontSize }) {
    return (
        <button className={styles.button} style={{
            fontSize: fontSize,
        }}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number
}

export default Button;