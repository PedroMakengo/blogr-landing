import style from "./style.module.scss";

export function Button({ props }) {
  return (
    <button onClick={props.onclick} className={style.button}>
      {props.title}
    </button>
  );
}
