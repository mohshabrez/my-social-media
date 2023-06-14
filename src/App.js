import './App.css';
import {Routes, Route} from "react-router-dom"
import { RootLayout } from './Pages/Home/RootLayout';
import { HomePage } from './Pages/Home/HomePage';
import { Feed } from './Pages/Feed/Feed';
import Mockman from "mockman-js"
import { LoginPage } from './Pages/Login/LoginPage';
import { SignUp } from './Pages/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="/" element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/Feed" element={<Feed/>}/>
          
          <Route path="/mock" element={<Mockman/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
