import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { tabs } from '@/app/utils/constants';
import BarsIcon from '@/assets/icons/BarsIcon';
import OrdersIcon from '@/assets/icons/OrdersIcon';
import TriangleLeft from '@/assets/icons/TriangleLeft';
import { IconButton } from '@/components';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const { pathname } = useLocation();

  const toggleHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const justify = isExpanded ? tw`justify-start` : tw`justify-center`;

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsExpired(true), 400);
    } else {
      setIsExpired(false);
    }
  }, [isExpanded]);
  return (
    <AnimatePresence>
      <motion.div
        css={[tw`sticky sm:top-0 bottom-0 flex sm:flex-col bg-secondary sm:h-screen z-30`]}
        initial={tw`w-[72px]`}
        animate={isExpanded ? tw`w-[200px]` : tw`w-[72px]`}
        transition={{ duration: 0.5 }}
      >
        <div tw='px-4 py-3'>
          <IconButton onClick={toggleHandler}>
            {isExpanded ? <TriangleLeft width='16' height='16' /> : <BarsIcon width='16' height='16' />}
          </IconButton>
        </div>
        {tabs?.map(item => (
          <>
            <NavLink
              key={item?.id}
              to={item.path}
              css={[
                tw`flex items-center gap-3 px-4 py-3 hover:bg-green-secondary font-bold relative h-[50px]`,
                justify,
                pathname === item.path && tw`bg-green-secondary text-white`
              ]}
            >
              <span tw='absolute left-6'>
                <OrdersIcon width='23' height='23' />
              </span>

              <motion.span
                animate={isExpired ? { opacity: 1 } : { opacity: 0, display: 'none' }}
                tw='sm:text-s16 text-s14 absolute left-14 mt-1'
              >
                {item?.title}
              </motion.span>
            </NavLink>
          </>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
