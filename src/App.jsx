import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Prime from './components/Prime';
import ItemsList from './components/ItemsList';
import Fullbox from './components/Fullbox';
import Footer from './components/Footer';

function App() {

  return (<>
    <Header/>
    <Hero></Hero>
    <Prime></Prime>
    <ItemsList></ItemsList>
    <Fullbox></Fullbox>
    <Footer></Footer>
    </>
  )
}

export default App;
