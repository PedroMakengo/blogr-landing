import { ItemFooter } from "./ItemFooter";
import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div>
          <img src="../../../images/logo.svg" alt="" />
        </div>
        <div className={style.menuFooter}>
          <ItemFooter
            className={style.itemFooter}
            title="Product"
            data={[
              "Overview",
              "Pricing",
              "Marketplace",
              "Features",
              "Integrations",
            ]}
          />
          <ItemFooter
            className={style.itemFooter}
            title="Company"
            data={["About", "Team", "Blog", "Careers"]}
          />
          <ItemFooter
            className={style.itemFooter}
            title="Connect"
            data={["Contact", "Newsletter", "Linkedin"]}
          />
        </div>
      </div>
    </footer>
  );
}
