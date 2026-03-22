import { Outlet } from 'react-router';
import DevNavigation from './DevNavigation';

export default function Layout() {
  return (
    <>
      <Outlet />
      <DevNavigation />
    </>
  );
}
