import React from "react";
import styles from "./header.module.scss";

export default function header() {
  return (
    <div className={styles.header}>
      <ul>
        <a href="">
          <li>Shop</li>
        </a>
        <a href="">
          <li>Galeries</li>
        </a>
        <a href="">
          <li>Le club</li>
        </a>
        <a href="">
          <li>Outfit</li>
        </a>
      </ul>
    </div>
  );
}
