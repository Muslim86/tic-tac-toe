import logo from './logo.svg';
import './App.css';
import PlayingArea from "./components/playingArea/playingArea";

function App() {
    return (
        <div className="App">
            <head>
                <img src={logo} className="App-logo" alt="logo"/>
            </head>
            <PlayingArea/>
        </div>
    );
}

export default App;
