import style from "./style.module.scss";

export function Header() {
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
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>

      <div className={style.content}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
      </div>
    </header>
  );
}
