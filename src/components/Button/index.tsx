import style from "./style.module.scss";

export function Button({ props }) {
  return <button onClick={props.onclick}>{props.title}</button>;
}
