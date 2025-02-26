import React from 'react';
import API_BASE_URL from '../config';
const NoteList = ({ notes, onNoteUpdated, onNoteDeleted }) => {
  const handleDelete = async (id) => {

    const response = await fetch(`${API_BASE_URL}/api/notes/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    if (response.ok) {
      onNoteDeleted();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <div key={note._id} className="border p-4 rounded dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Category: {note.category}</p>
          <button
            onClick={() => handleDelete(note._id)}
            className="bg-red-500 text-white px-2 py-1 rounded mt-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;