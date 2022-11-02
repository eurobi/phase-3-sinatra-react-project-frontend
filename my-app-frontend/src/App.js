import './App.css';
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import PostList from './components/PostList';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  return (
    <div className="App">
      <NavBar/>
      <LogIn />
      <PostList/>
    </div>
  );
}

export default App;
