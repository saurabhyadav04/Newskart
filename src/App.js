import React, { Component } from 'react'
import About from './Components/About'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


export default class App extends Component {
  render() {
    return (
      <><Toaster position="top-right"  
      toastOptions={{
                    success: {
                        theme: {            
                            primary: '#4aed88',
                        },
                    },
                }}>
              </Toaster>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                 <Route exact path="/about" element={ <About />} />
                 <Route exact path="/" element={<News key="general" topic="general" country='in'/>} />
                 <Route exact path="/Sports" element={<News key="sports" topic="sports" country='in'/>} />
                 <Route exact path="/Entertainment" element={<News key="entertainment" topic="entertainment" country='in'/>} />
                 <Route exact path="/Health" element={<News key="health" topic="health" country='in'/>} />
                 <Route exact path="/Technology" element={<News key="technology" topic="technology" country='in'/>} />
                 <Route exact path="/Science" element={<News key="science" topic="science" country='in'/>} />
            </Routes>
        </BrowserRouter>
        <footer><h5 className="text-center">Made with ❤️ by Saurabh Yadav</h5></footer>
       
      </>
    )
  }
}
