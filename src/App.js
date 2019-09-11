import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card"

function App() {
  let images = [
    {
      name: "Batman",
      description: "Description",
      url: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Batman 2",
      description: "Description 2",
      url: "https://images.unsplash.com/photo-1532169627909-dc6319871078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Batman 3",
      description: "Description 3",
      url: "https://images.unsplash.com/photo-1542410613-d073472c3135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Batman 4",
      description: "Description 4",
      url: "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Card images={images}/>
      </header>
    </div>
  );
}

export default App;
