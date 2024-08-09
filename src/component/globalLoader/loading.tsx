import React from 'react';
import { motion } from 'framer-motion';
import styles from './GlobalLoading.module.css';

const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const circleVariants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [1, 0.5, 1],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const GlobalLoading = () => {
  return (
    <div className={styles.spinnerContainer}>
      <motion.div className={styles.spinner} variants={spinnerVariants} animate='animate'>
        {/* <motion.div className={styles.innerCircle} variants={circleVariants} animate='animate' /> */}
      </motion.div>
      <motion.p
        className={styles.loadingText}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        Loading...
      </motion.p>
    </div>
  );
};

export default GlobalLoading;
