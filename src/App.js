import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App2 extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <h2 >Jibola Sogbein.</h2>
                <hr></hr>
                <p>I am an all round tech geek with a background in computer networking (CCNP) and specialising in web development</p>
                <p>I am always open to learning new technologies, building cool things and solving real
                    world problems with the super-human powers of software development.
                </p>
                <p>Python/Flask or Node/Express on the backend, JavaScript/React on the frontend.</p>
                <p><strong><a href="https://codecrui.se" className="link">CodeCruise</a></strong>: Tech blog where I share
                tutorials and tips, mostly on stuff related to Flask and React</p>
                <p>View my <strong><a href="https://github.com/andela-asogbein" className="link">github</a></strong> for some of my projects</p>
                <p>Outside of tech, I also write about music, politics and life in general
                <strong><a href="https://jibolasogbein.tumblr.com" className="link"> here</a></strong> and <strong><a href="http://jaguda.com/author/ajistotle" className="link">here</a></strong></p>
                <p>Follow me on twitter <strong><a href="https://twitter.com/jibolash" className="link">@jibolash</a></strong></p>
                <p>Spaces over tabs, thanks for asking.</p>
            </div>
        )
    }
}

export default App;
