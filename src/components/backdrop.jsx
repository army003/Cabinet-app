import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';

import { BodyText, Button, Caption } from '@/components';

const Backdrop = ({ isOpen, setIsOpen, children, title = 'Видеоидентификация', twStyle, headerStyle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div tw='fixed bottom-0 left-0 right-0 overflow-auto z-50 rounded-t-2xl'>
          <motion.div
            initial={{ height: 0, position: 'relative' }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            tw='overflow-hidden'
          >
            {/* <div tw='absolute top-0 bottom-0 left-0 h-full w-2' /> */}
            <div className='bg-secondary rounded-t-2xl p-5 w-full h-full' css={[twStyle]}>
              <div className='flex justify-between' css={[headerStyle]}>
                <div>
                  <BodyText text={title} variant='bold' />
                </div>
                <div>
                  <Button variant='link' onClick={() => setIsOpen(false)}>
                    <Caption text='Закрыть' twStyle={tw`text-green font-bold text-[14px]`} />
                  </Button>
                </div>
              </div>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export { Backdrop };
