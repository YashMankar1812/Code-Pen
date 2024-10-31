// src/components/Loading.jsx
import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const Loading = ({ color = "#3498db", size = 50 }) => {
  return (
    <div style={styles.spinnerContainer}>
      <ClipLoader color={color} loading={true} size={size} />
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Loading;
