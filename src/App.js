import React, { createContext } from 'react'
import Header from './components/header/header-component.jsx'
import Footer from './components/footer/footer-component.jsx';
import Note from './components/note/note-component.jsx';
import notes from './components/notes'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
   {
    notes.map(createNote => 
    <Note
    key = {createNote.id}
    title = {createNote.title}
    content = {createNote.content} />
    )
   }
    <Footer/>
 </div>
  );}
export default App;



    

    
    
