import React, { Component } from 'react';
import Header from './Header';
import StudentList from './StudentList';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <StudentList />
                <Footer />
            </div>
        );
    }
}

export default App;