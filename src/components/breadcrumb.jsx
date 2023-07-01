import 'twin.macro';

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

import CaretRight from '@/assets/icons/CaretRight';
import { Caption } from '@/components/caption';

export function Breadcrumb({ items }) {
  return (
    <div tw='flex items-center gap-2'>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={index}>
            {!isLast ? (
              <Fragment>
                <Link to={item.path}>
                  <Caption text={item.text} twStyle={tw`text-green`} />
                </Link>
                <CaretRight width='10' height='10' />
              </Fragment>
            ) : (
              <Caption text={item.text} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
