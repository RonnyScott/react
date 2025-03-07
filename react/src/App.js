import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Profile user={user} onUpdateUser={handleUpdateUser} />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;