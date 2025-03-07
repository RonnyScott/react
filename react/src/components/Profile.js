import React, { useState } from 'react';

const Profile = ({ user, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, email });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      {!isEditing ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mb-2 border rounded"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 mb-2 border rounded"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;