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
    <button className={styles.closeButton} onClick={onClose}>X</button>
      <h4>Sélectionnez votre bas</h4>
      <div className={styles.bottomsContainer}>
        {bottoms.map((bottom) => (
          <div key={bottom.id} className={styles.bottomItem} onClick={() => handleSelect(bottom)}>
            <img src={bottom.image} layout="responsive" alt={bottom.name} />
            <p>{bottom.name}</p>
            <p>{bottom.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomModal;
