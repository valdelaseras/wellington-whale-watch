import './App.css';
import Infographic from "./components/Infographic/Infographic";
import Nav from "./components/Decorator/Nav/Nav";
import Footer from "./components/Decorator/Footer/Footer";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
        <nav className="nav">
            <Nav/>
        </nav>
        <main className="main">
            <article>
                <div className="grid">
                    <div className="column">
                        <Landing/>
                        <Infographic year={'2022'} speciesTotal={40} sightingsTotal={248}/>
                    </div>
                </div>
            </article>
        </main>
        <footer className="footer">
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
