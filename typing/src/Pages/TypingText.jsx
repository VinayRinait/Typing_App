import React from "react";
import { useSelector } from "react-redux";

const TypingText = () => {
  const { presentText } = useSelector((store) => store.AppReducer);

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          paddingTop: "1rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Test Your Typing Skills
      </h1>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          border: "1px solid black",
          width: "90%",
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
          // marginTop: "30px",
          marginBottom: "40px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
          {presentText}
        </h1>
      </div>
    </>
  );
};

export default TypingText;
