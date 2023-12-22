import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Doc } from './Navbar/Doc';
import { Blog } from './Navbar/Blog';
import { Users } from './Navbar/Users';
import { Enterprise } from './Navbar/Enterprise';
import { Feedback } from './Navbar/Feedback';
import { Github } from './Navbar/Github';
import { Twitter } from './Navbar/Twitter';
import { Discord } from './Navbar/Discord';
import { Body } from './Body/Body';

function App() {
  return (
    <div className="">
      <Navbar/>
    <Routes>

<Route path="/" element={<Body/>}/>
<Route path="/Doc" element={<Doc/>}/>
<Route path="/Blog" element={<Blog/>}/>
<Route path="/Users" element={<Users/>}/>
<Route path="/Enterprise" element={<Enterprise/>}/>
<Route path="/Feedback" element={<Feedback/>}/>
<Route path="/Github" element={<Github/>}/>
<Route path="/Twitter" element={<Twitter/>}/>
<Route path="/Discord" element={<Discord/>}/>
    </Routes>
    </div>
  );
}

export default App;
