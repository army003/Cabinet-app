import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import * as yup from 'yup';

import { useAuthLoginMutation } from '@/app/api/auth.api';
import { setAuth } from '@/app/store/slices/auth';
import { pathnames, serviceName } from '@/app/utils/constants';
import { Button, Input, Input2, Title } from '@/components';
import ThemeToggle from '@/views/theme-toggle';

const schema = yup.object({
  mobile_phone: yup.string().min(11, 'Мобильный номер должен состоять из 11 символов').required(),
  password: yup.string().required()
});

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isSuccess, isLoading }] = useAuthLoginMutation();

  const {
    control,
    clearErrors,
    getValues,
    formState: { isValid }
  } = useForm({
    mode: 'onChange',
    defaultValues: { mobile_phone: '', password: '' },
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAuth(true));
      navigate(pathnames.main);
    }
  }, [dispatch, navigate, isSuccess]);

  const handleSubmit = useCallback(() => {
    login({ mobile_phone: '+' + getValues('mobile_phone'), password: getValues('password') });
  }, [login, getValues]);

  return (
    <Div100vh tw='flex flex-col justify-center origin-center -translate-y-20 mx-auto p-10 w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
      <div tw='flex flex-col items-center space-y-5'>
        <Title text={`Вход в ${serviceName('')}`} variant='bold' />
      </div>

      <form tw='flex flex-col space-y-4 bg-secondary p-5 rounded-s14 mt-6'>
        <Input
          label='Номер моб. телефона'
          inputMode='numeric'
          name='mobile_phone'
          type='tel'
          control={control}
          rules={{ required: { value: true, message: 'Это поле не может быть пустым' } }}
          mask={{
            mask: '+{7}(000)000-00-00'
          }}
          clearErrors={clearErrors}
        />
        <Input2
          label='Пароль'
          name='password'
          type='password'
          placeholder='Введите пароль'
          control={control}
          rules={{ required: { value: true, message: 'Это поле не может быть пустым' } }}
          clearErrors={clearErrors}
        />
      </form>
      <div tw='my-5 flex justify-between items-center sm:gap-14'>
        <ThemeToggle />
        <Button
          variant='secondary'
          onClick={handleSubmit}
          loading={isLoading}
          disabled={!isValid}
          twStyle={tw`sm:max-w-button !max-w-[180px]`}
        >
          Войти
        </Button>
      </div>
    </Div100vh>
  );
}
