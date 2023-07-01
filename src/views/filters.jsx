import 'twin.macro';

import { useForm } from 'react-hook-form';
import { useDebounce } from 'react-use';
import tw from 'twin.macro';

import SearchIcon from '@/assets/icons/SearchIcon';
import { Input2 } from '@/components';

export default function Filters({
  name = 'iin',
  placeholder = 'Введите ИИН для поиска',
  setQueryParams = Function.prototype
}) {
  const { control, clearErrors, watch } = useForm({
    defaultValues: { [name]: '' }
  });

  const textField = watch(name);

  useDebounce(
    () => {
      setQueryParams(queryParams => ({ ...queryParams, [name]: textField }));
    },
    1500,
    [textField]
  );

  return (
    <div tw='flex items-center gap-2'>
      <Input2
        name={name}
        control={control}
        clearErrors={clearErrors}
        placeholder={placeholder}
        twStyle={tw``}
        icon={<SearchIcon width='15' height='15' />}
      />
    </div>
  );
}
