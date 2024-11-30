import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import PostPage from './PostPage';
import NewPage from './NewPage';
import Messing from './Messing';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import { Dataprovider } from '../datacontext/DataContext';


function App() {
  

  return (
    <>
    <div>
    <Dataprovider>
      <Header title="Header says Happy coding"/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="post"> 
          <Route index element={<NewPage />}/>
          <Route path=':id' element={<PostPage />}/>
          </Route>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<Messing />}/>
      </Routes>
      <Footer/>
      </Dataprovider>
    </div>
    </>
  )
}

export default App
