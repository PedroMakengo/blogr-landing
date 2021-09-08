import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div>
          <img src="../../../images/logo.svg" alt="" />
        </div>
        <div className={style.menuFooter}>
          <div className={style.itemFooter}>
            <h2>Product</h2>
            <nav>
              <a href="#">Overview</a>
              <a href="#">Pricing</a>
              <a href="#">Marketplace</a>
              <a href="#">Features</a>
              <a href="#">Integratios</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
