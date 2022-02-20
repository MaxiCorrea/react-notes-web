import { createUseStyles } from "react-jss";

export const useCardHeaderStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 16px 0",
  },
  close: {
    display: "inline-block",
    width: "24px",
    height: "24px",
    borderRadius: " 50%",
    lineHeight: "24px",
    textAlign: "center",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    " &:focus": {
      boxShadow: "inset 2px 3px 0px rgba(0, 0, 0, 0.8)",
    },
  },
});
