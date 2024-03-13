import styles from './topModal.module.scss';

const TopModal = ({ tops, selectedTop, onSelect, onClose }) => {
  const handleSelect = (top) => {
    if (selectedTop && selectedTop.id === top.id) {
      onSelect(null); 
    } else {
      onSelect(top);
    }
  };

  return (
    <div className={styles.modal}>
      <h3>Sélectionnez votre haut</h3>
      <div className={styles.topsContainer}>
        {tops.map((top) => (
          <div key={top.id} className={styles.topItem} onClick={() => handleSelect(top)}>
            <img src={top.image} width={150} height={150} alt={top.name} />
            <p>{top.name}</p>
            <p>{top.price}</p>
          </div>
        ))}
      </div>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default TopModal;