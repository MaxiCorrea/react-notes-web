import * as React from "react";
import { useCardStyles } from "./Card.style";

export const Card: React.FC = (props) => {
  const classes = useCardStyles();
  return <div className={classes.root}>{props.children}</div>;
};
