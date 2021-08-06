import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import MainSlider from './components/MainSlider';
import TableData from './components/TableData';
import ContentHome from './components/ContentHome';
import Barchat from './components/Barchat';
import Footer from './components/Footer';
import BasicTable from './components/BasicTable';

function App() {
  return (
    <div>
      <MainSlider/>
      <ContentHome/>
      <Barchat/>
      <Footer/>
    </div>
      

  );
}

export default App;
