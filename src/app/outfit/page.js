'use client';
import { React, useState } from 'react';
import Image from 'next/image';
import styles from './outfit.module.scss';

import ProductCard from '../components/ProductCard/productCard';

export default function Outfit() {
  const [showTopModal, setShowTopModal] = useState(false);
  const [showBottomModal, setShowBottomModal] = useState(false);

  const displayTop = () => {
    setShowTopModal(true);
  };
  const displayBottom = () => {
    setShowBottomModal(true);
  };
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Créateur d'outfit</h3>
        <div>
          <div className={styles.top}>
            <div className={styles.addbutton}>
              <button onclick={displayTop}>+</button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.addbutton}>
              <button onclick={displayBottom}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
