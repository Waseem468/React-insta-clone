import React from 'react';
import './styles/App.css';
import './components/LandingPage/Landing.css'
import './components/New post/Newpost.css'
import './components/Posts/ListAll/post.css'
import './components/Postview/postveiw.css'
import PostviewContext from './contexts/PostviewContext';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <PostviewContext>
      <div className='wrapper'>
        <AppRouter />
      </div>  
    </PostviewContext>
  );
}

export default App;
