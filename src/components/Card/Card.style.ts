import { createUseStyles } from "react-jss";

export const useCardStyles = createUseStyles({
  root: { 
    backgroundColor: "#f0c806",
    borderRadius: "8px",
    width: "280px",
    margin: "0 10px 20px",
    boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.2)",
    transition: "all 0.5s",
    cursor: "pointer",
    fontFamily: "Caveat, cursive",
    "&:hover": {
      boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
    }, 
  },
});
