import style from "./style.module.scss";

interface ButtonProps {
  onclick: () => void;
  title: string;
}

export function Button({ onclick, title }: ButtonProps) {
  return (
    <button onClick={onclick} className={style.button}>
      {title}
    </button>
  );
}
