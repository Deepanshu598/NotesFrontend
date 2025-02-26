import React, { useState, useEffect, useMemo } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = ({ darkMode }) => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch(`${API_URL}/api/notes`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    const data = await response.json();
    setNotes(data);
  };

  const filteredNotes = notes.filter(note =>
    note.category.toLowerCase().includes(filter.toLowerCase())
  );

  const themeStyles = useMemo(
    () => ({
      container: `min-h-screen p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`,
      input: `w-full p-2 mb-4 border rounded transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`,
    }),
    [darkMode]
  );

  return (
    <div className={themeStyles.container}>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <NoteForm onNoteAdded={fetchNotes} />
      <input
        type="text"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={themeStyles.input}
      />
      <NoteList notes={filteredNotes} onNoteUpdated={fetchNotes} onNoteDeleted={fetchNotes} />
    </div>
  );
};

export default Dashboard;
