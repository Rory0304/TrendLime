import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Router from './routers/Router';

function App() {
    /* 테스트 용도 */
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/API/testapp/?q=12321');
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        };
        test();
    }, []);

    return (
        <div className="App">
            <Router />
        </div>
    );
}

export default App;
