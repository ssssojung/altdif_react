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
import Menu from './component/Menu';
function App() {
  return(
    <div className="App">
      <Home/>
      <Product/>
      <Brand/>
      <Play reI='playRe'/>
      <Review rev='review'/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default App;
