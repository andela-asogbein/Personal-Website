import React from 'react';
import MyPicture from './MyPicture'
import Bio from './Bio';
import Footer from './Footer';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <MyPicture />
                <Bio />
                <Footer />
            </div>
        )
    }
}

export default App;
