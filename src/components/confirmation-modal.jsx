import React from 'react';
import tw from 'twin.macro';

import { BodyText, Button, Modal, SubBody } from '@/components';

const ConfirmationModal = ({ open, setOpen, confirmHandler, title, caption, successBtnText, cancelBtnText }) => {
  return (
    <Modal open={open} setOpen={setOpen} headerStyle={tw`hidden`} twStyle={tw`!p-0 rounded-2xl`}>
      <div tw='w-[350px] rounded-2xl bg-secondary'>
        <div tw='flex flex-col space-y-2 bg-primary p-5 justify-center items-center pt-7 text-center rounded-t-2xl'>
          <BodyText
            text={title || 'Вы уверены что хотите прервать процесс?'}
            variant='bold'
            twStyle={tw`text-center pt-5`}
          />
          <SubBody text={caption || 'Все несохраненные данные будут утеряны'} twStyle={tw`text-secondary`} />
        </div>
        <div tw='bg-secondary grid grid-cols-2 gap-[1px] mt-[1px] rounded-2xl text-center'>
          <div tw='bg-primary p-5 px-2 rounded-bl-2xl'>
            <Button variant='link' twStyle={tw`text-primary min-w[200px]`} onClick={confirmHandler}>
              {successBtnText || 'Да, прервать'}
            </Button>
          </div>
          <div tw='bg-primary p-5 rounded-br-2xl'>
            <Button variant='link' onClick={() => setOpen(false)}>
              {cancelBtnText || 'Нет, отмена'}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
