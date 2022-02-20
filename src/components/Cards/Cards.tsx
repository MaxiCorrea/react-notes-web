import * as React from "react";
import { useCardsStyles } from "./Cards.style";

export const Cards: React.FC = (props) => {
  const classes = useCardsStyles();
  return <div className={classes.root}>{props.children}</div>;
};
