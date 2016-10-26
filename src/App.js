import React from 'react';
import './App.css';
import picture from '../public/img/jibola_pic.jpg';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <div className="pic-container">
                    <img src={picture} className="pic"/>
                </div>
                <div className="bio-container">
                    <h1>Jibola Sogbein.</h1>
                    <p>Web developer</p>
                    <hr></hr>
                    <p>I work with Python/Flask or Node/Express on the back end and JavaScript/React on the front end.</p>
                    <p>
                        I write about web development and other related technologies on <strong><a href="https://pub.scotch.io/@jibolash" className="link"> Scotch.io</a></strong>
                    </p>
                    <p>Outside of tech, I also write about music, politics and life in general on my
                        <strong><a href="https://jibolasogbein.tumblr.com" className="link"> Tumblr</a></strong> and on
                        <strong><a href="http://jaguda.com/author/ajistotle" className="link"> Jaguda, </a></strong>a Nigerian music, entertainment and lifestyle website</p>
                    <p>
                        Checkout some of my work on <strong><a href="https://github.com/jibolash" className="link">Github</a></strong> and follow me on twitter
                        <strong><a href="https://twitter.com/jibolash" className="link"> @jibolash</a></strong>
                    </p>
                    <p>Spaces over tabs, thanks for asking.</p>
                </div>
                <div className="footer">
                    <p>
                        Powered by <a href="https://facebook.github.io/react/">React</a> and <a href="https://www.heroku.com/">Heroku</a>.
                        View the source code on <a href="https://github.com/jibolash/Personal-Website">Github</a> |
                    <a href="https://twitter.com/jibolash"> Jibola Sogbein</a>, 2016</p>
                </div>
            </div>
        )
    }
}

export default App;
