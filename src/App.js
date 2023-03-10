import './App.css';
import Banner from "./components/banner"
import Header from "./components/header"
import Body from './components/body';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Banner
        titulo="Conoce al mejor equipo de Mexico"
      />
      <Header />
      <Banner
        subtitulo="Club America la gloria del futbol mexicano!"
      />
      <Body />
      <Footer>{<p>Elaborado por Oscar y Pablo</p>}</Footer>
    </div>
  );
}
export default App;
