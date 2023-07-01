export const pathnames = Object.freeze({
  main: '/',
  archives: '/archives',
  cars: '/cars',
  login: '/login'
});

export const serviceName = `Личный кабинет Prestige`;

const defaultTable = [
  { accessorKey: 'id', header: '№' },
  { accessorKey: 'full_name', header: 'ФИО клиента' },
  {
    accessorKey: 'birthday',
    header: 'Дата рождения',
    cell: data => new Date(data.row.original.birthday).toLocaleDateString()
  },
  { accessorKey: 'mobile_phone', header: 'Номер телефона' },
  { accessorKey: 'iin', header: 'ИИН' },
  { accessorKey: 'action', header: 'Действие' }
];

export const tabs = [
  {
    id: 'Main',
    path: '/',
    title: 'Все Заявки',
    tableColumns: defaultTable
  },
  {
    id: 'Main',
    path: '/orders',
    title: 'Все Заявки 2',
    tableColumns: defaultTable
  }
];
