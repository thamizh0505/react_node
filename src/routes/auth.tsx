import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from '../App.tsx';
import Home from '../pages/home.tsx';

export default function AuthRoutes(){
    return(
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </BrowserRouter>
       
    )
}