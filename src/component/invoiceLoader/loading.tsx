import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.paper}>
          <div className={styles.lines}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
      </div>
      <p className={styles.loadingText}>Processing Invoice...</p>
    </div>
  );
};

export default LoadingSpinner;
