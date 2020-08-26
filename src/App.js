import React from 'react';
import Header from './components/Header/Header'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Cards from './components/Cards/Cards'
import Talk from './components/Talk/Talk'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <About />
                <Benefits />
                <Cards />
                <Talk />
                <Download />
                <Footer />
            </div>
        )
    }
}

export default App;
