import 'twin.macro';

import { Portal } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';

import { setAuth } from '@/app/store/slices/auth';
import { serviceName } from '@/app/utils/constants';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import { BodyText, Button, Modal, SubTitle } from '@/components';
import ThemeToggle from '@/views/theme-toggle';

export default function MainHeader() {
  const [logoutModal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAuth(false));
    setLogoutModal(false);
  };
  return (
    <Fragment>
      <div tw='sticky top-0 flex justify-between items-center px-4 h-[65px] bg-secondary rounded-b-lg z-30'>
        <SubTitle text={`${serviceName}`} twStyle={tw`sm:text-s18 text-s14 font-bold sm:font-normal`} />
        <div tw='flex items-center gap-7'>
          <ThemeToggle />
          <button
            tw='flex items-center gap-2 bg-green-secondary p-2 rounded-xl text-white font-bold'
            onClick={() => setLogoutModal(true)}
          >
            <LogoutIcon width='15' height='15' />
            <BodyText text='Выйти' />
          </button>
        </div>
      </div>
      <Portal>
        <Modal
          title={'Выход из кабинета'}
          open={logoutModal}
          setOpen={setLogoutModal}
          twStyle={tw`!p-0 bg-primary rounded-2xl`}
          headerStyle={tw`p-5 bg-secondary rounded-t-2xl mb-3 flex items-center justify-between`}
        >
          <div tw='py-3 px-5'>
            <BodyText text={`Вы действительно хотите выйти?`} />
            <div tw='flex items-center gap-2 mt-5'>
              <Button variant='secondary' loading={false} onClick={handleLogout}>
                Да
              </Button>
              <Button variant='shadow' loading={false} onClick={() => setLogoutModal(false)}>
                Нет
              </Button>
            </div>
          </div>
        </Modal>
      </Portal>
    </Fragment>
  );
}
