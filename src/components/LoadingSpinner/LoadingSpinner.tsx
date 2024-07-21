import styles from './loadingSpinner.module.scss'; // Import your SCSS module

function LoadingSpinner() {
  return (
    <div className={styles['loading-spinner']}>
      <div className={styles['spinner']}></div>
    </div>
  );
}

export default LoadingSpinner;
