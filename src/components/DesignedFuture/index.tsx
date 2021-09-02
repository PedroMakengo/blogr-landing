import { Describe } from "../Describe";
import style from "./style.module.scss";
export function DesignedFuture() {
  return (
    <section className={style.designerfuture}>
      <div className={style.container}>
        <h1>Designed for the future</h1>

        <div className={style.content}>
          <Describe
            className={style.item}
            title="Introducing an extensible editor"
            paragraph="  Blogr features an exceedingly intuitive 
              interface which 
              lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs
              and allows easy manipulation 
              of embeds such as images, 
              videos, and Markdown. Extensibility with plugins 
              and themes provide easy ways 
              to add functionality or 
              change the looks of a blog."
          />
          <Describe
            className={style.item}
            title="Robust content management"
            paragraph="
              Flexible content management enables users to easily move through 
              posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With 
              this functionality, you’re in full control.
            "
          />
        </div>
      </div>
    </section>
  );
}
