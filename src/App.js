
import './App.css';
import Banner from "./Component/banner"
import Enterpreneur from './Component/enterpreneur';
import Home from "./Component/home"
import Partner from "./Component/partner"
import LakeBasin from './Component/lakebasin';
import Events from './Component/events';
import Footer from './Component/footer';



function App() {
  return (
    <div className="App">
      <Banner/>
      <Home/>
      <Enterpreneur/>
      <Partner/>
      <LakeBasin/>
      <Events/>
      <Footer/>
      

    </div>

  );
}
      
  


export default App;
