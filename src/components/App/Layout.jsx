import { Suspense } from 'react';

const { Outlet } = require('react-router-dom');
const { default: Header } = require('components/App/header');

const Layout = () => {
  return (
    <div>
      <header className="header">
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </header>
    </div>
  );
};
export default Layout;
