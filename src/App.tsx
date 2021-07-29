import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg",
      age: 36,
      note: "Allegeric to staying on the same time"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to me Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
