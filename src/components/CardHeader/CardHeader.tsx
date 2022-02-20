import * as React from "react";
import { useCardHeaderStyles } from "./CardHeader.style";

interface ICardHeaderProps {
  onDelete: () => void;
}

export const CardHeader: React.FC<ICardHeaderProps> = (props) => {
  const classes = useCardHeaderStyles();
  return (
    <div className={classes.header}>
      <span
        className={classes.close}
        onClick={() => {
          props.onDelete();
        }}
      >
        <i className="fas fa-times" />
      </span>
    </div>
  );
};
