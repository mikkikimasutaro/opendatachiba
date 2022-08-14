import "./App.css";

import Main from "./containers/Main";
import Info from './containers/Info';
import Population from "./containers/Population";
import Working from './containers/Working';
import PrivacyPolicy from './containers/PrivacyPolicy';
import Covid19 from './containers/Covid19';

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';

//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';

//Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Link to="/sitemap.xml">sitemap</Link>
                    <ResponsiveDrawer>
                    <Routes>
                        <Route path='/sitemap.xml' />
                        <Route path='/' element={<Main />} />
                        <Route path='/population' element={<Population />} />
                        <Route path='/working' element={<Working />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                        <Route path='/covid19' element={<Covid19 />} />
                        <Route path="*" element={
                                               <main style={{ padding: "1rem" }}>
                                                  <p>There's nothing here!</p>
                                               </main>
                                                } 
                        />
                    </Routes>
                    </ResponsiveDrawer>
            </BrowserRouter>
        </div>
    );
}

export default App;
