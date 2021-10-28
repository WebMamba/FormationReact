import Header from "../Header";
import Footer from "../Footer";
import ErrorMessage from "../ErrorsMessage";
import PropTypes from "prop-types";

export default function Layout(props) {
  const { openError, errorMessage } = props;

  return (
    <>
      <Header />
      {props.children}
      <ErrorMessage open={openError} message={errorMessage} />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  openError: PropTypes.bool,
  errorMessage: PropTypes.string,
};
