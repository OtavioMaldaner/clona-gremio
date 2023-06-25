import { Analytics } from '@vercel/analytics/react';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
    return(
        <div className="mainApp">
            <Header />
            <Body />
            <Footer />
            <Analytics />
        </div>
    );
}
export default App;