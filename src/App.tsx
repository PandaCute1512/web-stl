import './App.scss';
import { Outlet } from 'react-router-dom';

const App: any = () =>{
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
