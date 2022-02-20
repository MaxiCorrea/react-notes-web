import * as React from "react";
import { useCardBodyStyles } from "./CardBody.style";

interface ICardBodyProps {
  readonly id: string;
  readonly text: string;
  readonly onUpdate: (id: string, text: string) => void;
}

export const CardBody: React.FC<ICardBodyProps> = (props) => {
  const classes = useCardBodyStyles();
  const [modifield , setModifield] = React.useState(false);

  React.useEffect(()=> {
    setModifield(false);
  },[]);

  return (
    <div
      className={classes.body}
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
