// import logo from './logo.svg';
// css
import './App.css';
import './css/style.css';
//component
import Home from './component/Home';
import Brand from './component/Brand';
import Product from './component/Product';
import Play from './component/Play';
import Review from './component/Review';
import Footer from './component/Footer';

function App() {
  return(
    <div className="App">
      <Home/>
      <Product/>
      <Brand/>
      <Play/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
