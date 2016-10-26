import React from 'react';
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <h2>Jibola Sogbein.</h2>
                <p>Web developer</p>
                <hr></hr>
                <p>I enjoy working Python/Flask or Node/Express on the backend and JavaScript/React on the frontend.</p>
                <p>
                    I write about web development and other related technologies<strong><a href="https://pub.scotch.io/@jibolash" className="link"> here</a></strong>
                </p>
                <p>Outside of tech, I also write about music, politics and life in general on my
                    <strong><a href="https://jibolasogbein.tumblr.com" className="link"> Tumblr</a></strong> and on
                    <strong><a href="http://jaguda.com/author/ajistotle" className="link"> Jaguda, </a></strong>a Nigerian a music, entertainment and lifestyle website</p>
                <p>
                    Checkout some of my work on <strong><a href="https://github.com/andela-asogbein" className="link">github</a></strong> and follow me on twitter
                    <strong><a href="https://twitter.com/jibolash" className="link">@jibolash</a></strong>
                </p>
                <p>Spaces over tabs, thanks for asking.</p>
            </div>
        )
    }
}

export default App;
