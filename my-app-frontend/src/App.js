import './App.css';
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { Routes, Route, useHistory } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(r => r.json())
    .then(posts => setPosts(posts))
  },[])

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user}/>
        <Routes>
          <Route path='/' element={<Home posts={posts} setPosts={setPosts} user={user}/>}/>
          <Route path='/login' element={user === null? <LogIn setUser={setUser}/> : <></>}/>
        </Routes>
    </div>
  );
}

export default App;
