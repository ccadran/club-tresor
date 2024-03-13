'use client';
import { React, useState } from 'react';
import Image from 'next/image';
import styles from './outfit.module.scss';

import TopModal from '../components/TopModal/topModal';
import BottomModal from '../components/BottomModal/bottomModal';

export default function Outfit() {
  const [showTopModal, setShowTopModal] = useState(false);
  const [showBottomModal, setShowBottomModal] = useState(false);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  const tops = [
    {
      id: 1,
      name: "Pull 80's en coton et lin rayé et upcyclé - 8/9 ans, 10/11 ans",
      image: '/clothes/chemise.png',
      price: '32,00 €',
    },
    {
      id: 2,
      name: 'Pull à rayures colorblock - 6 ans',
      image: '/clothes/pull-rayures-orange.png',
      price: '45,00 €',
    },
    {
      id: 1,
      name: "Pull 80's en coton et lin rayé et upcyclé - 8/9 ans, 10/11 ans",
      image: '/clothes/pull-rouge.png',
      price: '25,00 €',
    },
  ];

  const bottoms = [
    { id: 1, name: 'Jeans', image: '/jeans.jpg' },
    { id: 2, name: 'Skirt', image: '/skirt.jpg' },
  ];

  const displayTop = () => {
    if (showBottomModal) {
      setShowBottomModal(false);
    }
    setShowTopModal(true);
  };

  const displayBottom = () => {
    if (showTopModal) {
      setShowTopModal(false);
    }
    setShowBottomModal(true);
  };

  const handleCloseTopModal = () => {
    setShowTopModal(false);
  };

  const handleCloseBottomModal = () => {
    setShowBottomModal(false);
  };

  return (
    <div className={styles.outfitSection}>
      <h3 className={styles.title}>Créateur d'outfit</h3>
      <div className={styles.nextButtons}>
        <button className={styles.validateButton}>Valider mon outfit</button>
        <button className={styles.bagButton}>Ajouter au panier</button>
      </div>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.top} onClick={displayTop}>
            {selectedTop ? (
              <div className={styles.selectedItem}>
                <Image
                  src={selectedTop.image}
                  alt={selectedTop.name}
                  width={250}
                  height={250}
                />
              </div>
            ) : (
              <div className={styles.addbutton}>
                <button>
                  <Image
                    src={'icons/plus-icon.svg'}
                    width={50}
                    height={50}
                    className={styles.buttonIcon}
                  />
                </button>
              </div>
            )}
          </div>
          <div className={styles.bottom} onClick={displayBottom}>
            {selectedBottom ? (
              <div className={styles.selectedItem}>
                <Image
                  src={selectedBottom.image}
                  alt={selectedBottom.name}
                  width={250}
                  height={250}
                />
              </div>
            ) : (
              <div className={styles.addbutton}>
                <button>
                  <Image
                    src={'icons/plus-icon.svg'}
                    width={50}
                    height={50}
                    className={styles.buttonIcon}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.modalscontainer}>
          {showTopModal ? (
            <TopModal
              tops={tops}
              selectedTop={selectedTop}
              onSelect={setSelectedTop}
              onClose={handleCloseTopModal}
            />
          ) : showBottomModal ? (
            <BottomModal
              bottoms={bottoms}
              selectedBottom={selectedBottom}
              onSelect={setSelectedBottom}
              onClose={handleCloseBottomModal}
            />
          ) : (
            <p className={styles.defaultModal}>
              Cliquez sur un emplacement à gauche pour ajouter un produit.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
