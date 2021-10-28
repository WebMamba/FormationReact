import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MdError } from "react-icons/md";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage(props) {
  const { open, message } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [open]);

  return (
    <>
      {show && (
        <div className={styles.container}>
          <MdError />
          <p className={styles.text}>{message}</p>
        </div>
      )}
    </>
  );
}

ErrorMessage.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
};
