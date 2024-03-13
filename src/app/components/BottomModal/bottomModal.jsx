import styles from './bottomModal.module.scss';

const BottomModal = ({ bottoms, selectedBottom, onSelect, onClose }) => {
  const handleSelect = (bottom) => {
    if (selectedBottom && selectedBottom.id === bottom.id) {
      onSelect(null); 
    } else {
      onSelect(bottom);
    }
  };

  return (
    <div className={styles.modal}>
      <h3>Sélectionnez votre bas</h3>
      <div className={styles.bottomsContainer}>
        {bottoms.map((bottom) => (
          <div key={bottom.id} className={styles.bottomItem} onClick={() => handleSelect(bottom)}>
            <img src={bottom.image} alt={bottom.name} />
            <p>{bottom.name}</p>
            <p>{bottom.price}</p>
          </div>
        ))}
      </div>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default BottomModal;
