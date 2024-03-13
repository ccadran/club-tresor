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
      image: '/clothes/pull-coton-lin.jpeg',
      price: '32,00 €',
    },
    {
      id: 2,
      name: 'Pull à rayures colorblock - 6 ans',
      image: '/clothes/pull-rayures.jpeg',
      price: '45,00 €',
    },
    {
      id: 3,
      name: "Pull 80's en coton et lin rayé et upcyclé - 8/9 ans, 10/11 ans",
      image: '/clothes/pull-coton-lin.jpeg',
      price: '32,00 €',
    },
    {
      id: 4,
      name: 'Pull à rayures colorblock - 6 ans',
      image: '/clothes/pull-rayures.jpeg',
      price: '45,00 €',
    },
  ];

  const bottoms = [
    { id: 1, name: 'Jeans', image: '/jeans.jpg' },
    { id: 2, name: 'Skirt', image: '/skirt.jpg' },
  ];

  const displayTop = () => {
    setShowTopModal(true);
  };

  const displayBottom = () => {
    setShowBottomModal(true);
  };

  const handleCloseTopModal = () => {
    setShowTopModal(false);
  };

  const handleCloseBottomModal = () => {
    setShowBottomModal(false);
  };

  return (
    <>
      <h3 className={styles.title}>Créateur d'outfit</h3>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.top} onClick={displayTop}>
            {selectedTop ? (
              <div className={styles.selectedItem}>
                <Image
                  src={selectedTop.image}
                  alt={selectedTop.name}
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <div className={styles.addbutton}>
                <button></button>
              </div>
            )}
          </div>
          <div className={styles.bottom} onClick={displayBottom}>
            {selectedBottom ? (
              <div className={styles.selectedItem}>
                <Image
                  src={selectedBottom.image}
                  alt={selectedBottom.name}
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <div className={styles.addbutton}>
                <button></button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.modalscontainer}>
          <div className={styles.modalscontainer}>
            <div className={styles.modalscontainer}>
              {showTopModal && !showBottomModal ? (
                <TopModal
                  tops={tops}
                  selectedTop={selectedTop}
                  onSelect={(top) => {
                    setSelectedTop(top);
                    setShowBottomModal(false);
                    setShowTopModal(true);
                  }}
                  onClose={() => {
                    handleCloseTopModal();
                    setShowBottomModal(false);
                  }}
                />
              ) : !showTopModal && showBottomModal ? (
                <BottomModal
                  bottoms={bottoms}
                  selectedBottom={selectedBottom}
                  onSelect={(bottom) => {
                    setSelectedBottom(bottom);
                    setShowTopModal(false);
                    setShowBottomModal(true);
                  }}
                  onClose={() => {
                    handleCloseBottomModal();
                    setShowTopModal(false);
                  }}
                />
              ) : (
                <p className={styles.defaultModal}>
                  Cliquez sur un emplacement à gauche pour ajouter un produit.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
