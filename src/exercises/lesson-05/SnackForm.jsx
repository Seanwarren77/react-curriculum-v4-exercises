import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

function SnackForm({ onAddSnack, onUpdateSnack, editingSnack }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  const validateName = () => name.trim() !== '';
  const validateRating = () => {
    return rating >= 1 && rating <= 5;
  };

  const getNameError = () => {
    return !validateName() && touched.name ? 'Snack name is required' : '';
  };

  const getRatingError = () => {
    return !validateRating() && touched.rating ? 'Please select a rating' : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    const snackData = {
      name: name.trim(),
      rating,
    };

    if (editingSnack) {
      onUpdateSnack({ ...editingSnack, ...snackData });
    } else {
      onAddSnack(snackData);
      setName('');
      setRating('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        placeholder="Snack name"
      />

      {getNameError() && <div className={styles.error}>{getNameError()}</div>}

      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        placeholder="Rating (1-5)"
      />

      {getRatingError() && (
        <div className={styles.error}>{getRatingError()}</div>
      )}

      <button type="submit">
        {editingSnack ? 'Update Snack' : 'Add Snack'}
      </button>
    </form>
  );
}

export default SnackForm;
