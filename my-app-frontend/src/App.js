import './App.css';
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import PostList from './components/PostList';
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
          <Route path='/' element={<PostList posts={posts}/>}/>
          <Route path='/login' element={user === null? <LogIn setUser={setUser}/> : <></>}/>
        </Routes>
    </div>
  );
}

export default App;
