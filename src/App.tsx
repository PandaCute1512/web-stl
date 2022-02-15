import './App.scss';
import Home from './features/Home';
import { Outlet } from 'react-router-dom';

const App: any = () =>{
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
