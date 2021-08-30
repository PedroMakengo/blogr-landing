import { Describe } from "../Describe";
import style from "./style.module.scss";
export function DesignedFuture() {
  return (
    <section className={style.designerfuture}>
      <div className={style.container}>
        <h1>Designed for the future</h1>

        <div className={style.content}>
          <Describe title="Introducing an extensible editor" paragraph="" />
        </div>
      </div>
    </section>
  );
}
