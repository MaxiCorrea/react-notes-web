import * as React from "react";
import { useNewCardStyles } from "./NewCard.style";

interface INewCardProps {
  readonly onNewNote: () => void;
}

export const NewCard: React.FC<INewCardProps> = (props) => {
  const classes = useNewCardStyles();
  return (
    <button
      className={classes.button}
      onClick={() => {
        props.onNewNote();
      }}
    >
      New Note
    </button>
  );
};
