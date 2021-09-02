import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img src="../../../images/logo.svg" alt="" />
        <div>Menu</div>
      </div>
    </footer>
  );
}
