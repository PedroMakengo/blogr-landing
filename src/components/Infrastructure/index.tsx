import style from "./style.module.scss";

export function Infrastructure() {
  return (
    <div className={style.infra}>
      <div className={style.container}>
        <img src="../../../images/illustration-phones.svg" alt="" />
        <div className={style.state}>
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
}
