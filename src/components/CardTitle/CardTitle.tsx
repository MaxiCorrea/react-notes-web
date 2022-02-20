import * as React from "react";
import { useCardTitleStyles } from "./CardTitle.style";

interface ICardTitleProps {
  readonly id: string;
  readonly text: string;
  readonly onUpdate: (id: string, text: string) => void;
}

export const CardTitle: React.FC<ICardTitleProps> = (props) => {
  const classes = useCardTitleStyles();
  const [modifield , setModifield] = React.useState(false);

  React.useEffect(()=> {
    setModifield(false);
  },[]);

  return (
    <div
      className={classes.title}
      contentEditable
      suppressContentEditableWarning
      id={props.id}
      onInput={(event) => {
        setModifield(true);
        props.onUpdate(props.id, event.currentTarget.innerText);
      }}
    >
      {!modifield && props.text }
    </div>
  );
};
