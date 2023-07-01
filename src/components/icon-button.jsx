import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';

const styles = {
  button: ({ disabled, twStyle }) => [
    tw`py-[4px] px-[5px] text-3xl flex justify-center items-center bg-button rounded-xl text-white w-[41px] h-[39px] flex-shrink-0`,
    disabled && tw`bg-input`,
    twStyle && twStyle
  ]
};

const IconButton = ({ children, disabled = false, onClick, twStyle }) => {
  return (
    <motion.button
      css={styles.button({ disabled, twStyle })}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export { IconButton };
