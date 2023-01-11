// import logo from './logo.svg';
// css
import './App.css';
import './css/style.scss';
//component
import Home from './component/home/Home';
import Brand from './component/Brand/Brand';
import Product from './component/product/Product';
import Play from './component/play/Play';
import Review from './component/review/Review';
import Footer from './component/Footer';
import Menu from './component/Menu';
function App() {
  return(
    <div className="App">
      <Home/>
      <Product />
      <Brand/>
      <Play reI='playRe'/>
      <Review/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default App;
