import React from 'react';
import Div100vh from 'react-div-100vh';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';

import { clearError } from '@/app/store/slices/error';
import errorIcon from '@/assets/images/503.svg';
import { BigTitle, Button, SubBody, Wrapper } from '@/components';

const Page503 = ({ error, resetErrorBoundary }) => {
  const dispatch = useDispatch();

  const flowUuid = '';

  const goToMainPage = () => {
    resetErrorBoundary();
    dispatch(clearError());
    if (flowUuid) {
      // dispatch(applyMainStatus.endpoints.applyStatus.initiate({ uuid: flowUuid }, { forceRefetch: true }));
    } else {
      window.open(import.meta.env.DEV ? import.meta.env.AC_DEV_LANDING : import.meta.env.AC_PROD_LANDING, '_self');
    }
  };

  return (
    <Div100vh>
      <Wrapper twStyles={tw`h-screen flex flex-col justify-center items-center -translate-y-20 pt-7 sm:pt-0`}>
        <div tw='flex flex-col justify-center items-center'>
          <img src={errorIcon} alt='error icon' />
        </div>

        <div tw='pt-5 text-center flex flex-col space-y-2'>
          <BigTitle text={'Ведутся технические работы'} />
          <SubBody
            text={
              error
                ? 'По техническим причинам сервис временно недоступен. Пожалуйста, попробуйте позднее'
                : 'Просим прощения за неудобства, но в данный момент по техническим причинам сервис недоуступен. Пожалуйста, попробуйте позднее'
            }
            twStyle={tw`text-center text-secondary lg:max-w-[512px]`}
          />
        </div>
        <div tw='pt-9'>
          <Button variant='shadow' twStyle={tw`w-[350px]`} onClick={goToMainPage}>
            Повторить
          </Button>
        </div>
      </Wrapper>
    </Div100vh>
  );
};
export default Page503;
