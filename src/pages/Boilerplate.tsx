import { Outlet } from 'react-router';
import Header from '../components/Header';

function Boilerplate() {
  return (
    <main className="bg-darkblue font-raleway">
      <Header />
      <div className="pt-40">
        <Outlet />
      </div>
    </main>
  );
}

export default Boilerplate;
