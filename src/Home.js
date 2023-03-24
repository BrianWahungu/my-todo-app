import React from 'react';
import Todo from './Todo';
// import AllPets from './AllPets'

const Home = ({ username }) => {
  return (
    <div>
      {/* <section className='topbar'>
          <h2>Welcome, {username}!</h2>
          <p>Username: {username}</p>   
      </section> */}
    <div className="home">
       <Todo />
    </div>
    </div>
  );
};

export default Home;
