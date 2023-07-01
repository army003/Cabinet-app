import { Route, Routes } from 'react-router-dom';

import { pathnames } from '@/app/utils/constants';
import AuthPage from '@/pages/auth-page';
import Cabinet from '@/pages/cabinet';

function App() {
  return (
    <Routes>
      <Route path={'*'} element={<Cabinet />} />
      <Route path={pathnames.login} element={<AuthPage />} />
    </Routes>
  );
}
export default App;
