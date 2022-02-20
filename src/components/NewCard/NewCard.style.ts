import { createUseStyles } from "react-jss";

export const useNewCardStyles = createUseStyles({
  button: {
    width: "200px",
    display: "block",
    margin: "0 auto 20px",
    backgroundColor: "#ffffff",
    padding: "10px 32px",
    border: "1px solid #e0e0e0",
    fontSize: "26px",
    outline: 0,
    transition: "all 0.3s",
    cursor: "pointer",
    fontFamily: "Caveat, cursive",
    "&:hover": {
      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
    },
    "&:active": {
      position: "relative",
      top: "1px",
    },
  },
});
