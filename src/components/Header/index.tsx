import { Button } from "../Button";
import style from "./style.module.scss";

export function Header() {
  function handleClique() {
    alert("funcionando");
  }
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.navegation}>
          <img src="../../images/logo.svg" alt="Logo" />
          <nav>
            <a href="">Product</a>
            <a href="">Company</a>
            <a href="">Connect</a>
          </nav>
        </div>
        <div className={style.logins}>
          {/* [Componente] */}
          <Button onclick={handleClique} title="Login" />
          <Button onclick={handleClique} title="Sign up" />
        </div>
      </div>

      <div className={style.content}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <Button onclick={handleClique} title="Start For Free" />
        <Button onclick={handleClique} title="Learn More" />
      </div>
    </header>
  );
}
