import React from "react";
import styles from "./article.module.scss";

export default function Article() {
  return (
    <div className={styles.articleContainer}>
      <h2>Titre</h2>
      <h5>Date</h5>
      <div className={styles.imgCover}>
        <img src="/images/illu.png" alt="" />
      </div>
      <p>
        Une sélection de vêtements Vintage, ainsi que Nos Séries Limitées,
        fabriquées en France à partir de stocks de tissus dormants ou
        upcyclées.Une sélection de vêtements Vintage, ainsi que Nos Séries
        Limitées, fabriquées en France à partir de stocks de tissus dormants ou
        upcyclées.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
        congue est. Nullam venenatis lorem eget ligula sollicitudin, ut
        porttitor dolor fermentum. Pellentesque luctus ipsum non nibh vestibulum
        ornare. Quisque est purus, auctor at lorem ac, vehicula consectetur
        nisl. Etiam vel varius mauris, sit amet mattis ante. Duis et nunc
        tincidunt, aliquet quam at, faucibus sem. Sed condimentum sollicitudin
        sagittis. Aliquam erat volutpat. Pellentesque vestibulum purus eu turpis
        elementum, vitae sollicitudin ex ultrices.
        <br />
        <br />
        Cras sed neque tempor, consequat augue ac, suscipit ex. Vivamus
        malesuada mauris dolor, ac ornare lectus commodo sed. Donec rhoncus
        lectus non dolor sodales venenatis. Sed metus risus, blandit vitae sem
        et, ultricies pretium nisi.
      </p>
      <div className={styles.imgContainer}>
        <img src="/images/illu.png" alt="" />
      </div>
      <p>
        Une sélection de vêtements Vintage, ainsi que Nos Séries Limitées,
        fabriquées en France à partir de stocks de tissus dormants ou
        upcyclées.Une sélection de vêtements Vintage, ainsi que Nos Séries
        Limitées, fabriquées en France à partir de stocks de tissus dormants ou
        upcyclées.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
        congue est. Nullam venenatis lorem eget ligula sollicitudin, ut
        porttitor dolor fermentum. Pellentesque luctus ipsum non nibh vestibulum
        ornare. Quisque est purus, auctor at lorem ac, vehicula consectetur
        nisl. Etiam vel varius mauris, sit amet mattis ante. Duis et nunc
        tincidunt, aliquet quam at, faucibus sem. Sed condimentum sollicitudin
        sagittis. Aliquam erat volutpat. Pellentesque vestibulum purus eu turpis
        elementum, vitae sollicitudin ex ultrices.
        <br />
        <br />
        Cras sed neque tempor, consequat augue ac, suscipit ex. Vivamus
        malesuada mauris dolor, ac ornare lectus commodo sed. Donec rhoncus
        lectus non dolor sodales venenatis. Sed metus risus, blandit vitae sem
        et, ultricies pretium nisi.
      </p>
    </div>
  );
}
