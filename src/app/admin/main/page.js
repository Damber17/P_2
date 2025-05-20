'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function AdminDashboard({ roomAvailability, handleEditRoom }) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Hotel Dashboard</h1>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Today</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Revenue Overview</h3>
            <select className="bg-white px-3 py-1 rounded-lg text-sm border border-gray-200 focus:ring-2 focus:ring-blue-500">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 bg-white/50 rounded-lg flex items-center justify-center border border-gray-200">
            <div className="text-center p-4">
              <div className="text-gray-500 mb-2">Total Revenue</div>
              <div className="text-3xl font-bold text-gray-800">$24,780</div>
              <div className="text-green-600 text-sm mt-2">↑ 12% from last month</div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Booking Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <span className="text-blue-600">🛏</span>
                </div>
                <span className="font-medium">Rooms</span>
              </div>
              <span className="font-bold">70</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <span className="text-purple-600">🍽</span>
                </div>
                <span className="font-medium">Events</span>
              </div>
              <span className="font-bold">32</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <span className="text-green-600">🍴</span>
                </div>
                <span className="font-medium">Dining</span>
              </div>
              <span className="font-bold">14</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Room Availability */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Room Availability</h3>
            
          </div>
          <div className="space-y-3">
            {roomAvailability.map((room, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    room.count > 2 ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    <span className={room.count > 2 ? 'text-green-600' : 'text-yellow-600'}>
                      {room.count > 2 ? '✓' : '!'}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">{room.type}</span>
                    <span className="block text-xs text-gray-500">{room.count} available</span>
                  </div>
                </div>
                <button
                  onClick={() => handleEditRoom(index)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Event Space */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Event Space</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800">Conference</h4>
                  <p className="text-sm text-gray-600">May 5, 2023</p>
                </div>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  Booked
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">32 attendees</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800">Wedding Reception</h4>
                  <p className="text-sm text-gray-600">May 12, 2023</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Confirmed
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">120 attendees</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dining Room */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Dining Reservations</h3>
            
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800">Dinner Reservations</h4>
                  <p className="text-sm text-gray-600">Today, 7:30 PM</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">14 guests</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800">Brunch Special</h4>
                  <p className="text-sm text-gray-600">May 7, 2023</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  Pending
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">8 guests</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventManagement({ events, form, setForm, handleAddEvent, handleDeleteEvent }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Event Management</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
            <span className="mr-2">+</span> Add Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Event Form */}
        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Event</h3>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
              <input
                placeholder="Enter event title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Event description"
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[100px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                placeholder="Paste image URL"
                value={form.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Create Event
            </button>
          </form>
        </div>

        {/* Event List */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Events</h3>
          {events.length === 0 ? (
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-gray-400 mb-2">📅</div>
              <p className="text-gray-600">No events scheduled yet</p>
              <p className="text-sm text-gray-500 mt-1">Add your first event using the form</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event.id} className="border rounded-xl p-4 hover:shadow-md transition bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-gray-800">{event.title}</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  {event.desc && <p className="text-gray-600 mb-3">{event.desc}</p>}
                  {event.img && (
                    <img 
                      src={event.img} 
                      alt={event.title} 
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  <div className="flex justify-end">
                    <button 
                      onClick={() => handleDeleteEvent(event.id)}
                      className="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm font-medium flex items-center"
                    >
                      <span className="mr-1">🗑</span> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = useState([]);
  const [dining, setDining] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ title: '', date: '', desc: '', img: '' });
  const [roomAvailability, setRoomAvailability] = useState([
    { type: 'Single', count: 4 },
    { type: 'Double', count: 2 },
    { type: 'Suite', count: 1 },
    { type: 'Standard', count: 3 },
    { type: 'Penthouse', count: 1 },
  ]);
  const router = useRouter();

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/roomBooking');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setRooms([]); // Set empty array on error
      setMessage(`❌ ${error.message || 'Error fetching room bookings'}`);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/eventBooking');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]); // Set empty array on error
      setMessage(`❌ ${error.message || 'Error fetching event bookings'}`);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const fetchDining = async () => {
    try {
      const response = await fetch('/api/admin/diningbookings');
      if (!response.ok) throw new Error('Failed to fetch dining');
      const data = await response.json();
      setDining(data);
    } catch (error) {
      console.error('Error fetching dining:', error);
      setMessage('❌ Error fetching dining bookings');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  useEffect(() => {
    if (activeTab === 'room') fetchRooms();
    if (activeTab === 'event') fetchEvents();
    if (activeTab === 'dining') fetchDining();
    if (activeTab === 'manageEvents') fetchEvents();
    if (activeTab === 'manageGallery') fetchImages();
  }, [activeTab]);

  const deleteBooking = async (id, type) => {
    try {
      const response = await fetch(`/api/${type}Booking`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Failed to delete booking');

      if (type === 'room') fetchRooms();
      if (type === 'event') fetchEvents();
      if (type === 'dining') fetchDining();

      setMessage('✅ Booking deleted successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting booking:', error);
      setMessage('❌ Failed to delete booking');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handlePhotoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (!response.ok) throw new Error('Failed to add photo');

      const data = await response.json();
      setMessage('✅ Photo added successfully!');
      setImageUrl('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error adding photo.');
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to add event');

      setForm({ title: '', date: '', desc: '', img: '' });
      fetchEvents();
      setMessage('✅ Event added successfully!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Failed to add event.');
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete event');
      fetchEvents();
      setMessage('✅ Event deleted successfully!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Failed to delete event.');
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to logout');

      localStorage.removeItem('token');
      setMessage('✅ Logged out successfully');
      setTimeout(() => {
        router.push('/admin/login');
      }, 1000);
    } catch (error) {
      console.error('Error logging out:', error);
      setMessage('❌ Failed to logout');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleEditRoom = (index) => {
    const newCount = prompt(
      `Enter new count for ${roomAvailability[index].type}:`,
      roomAvailability[index].count
    );
    if (newCount !== null) {
      const updatedRooms = [...roomAvailability];
      updatedRooms[index].count = parseInt(newCount, 10);
      setRoomAvailability(updatedRooms);
    }
  };

  const [url, setUrl] = useState("");
  const [smessage, setsMessage] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/photos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      setImages([]); // Set empty array on error
      setMessage('❌ Error fetching gallery images');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  useEffect(() => {
    if (activeTab === 'manageGallery') {
      fetchImages();
    }
  }, [activeTab]);

  const handle_Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/photos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }

      const data = await response.json();
      setMessage('✅ Image uploaded successfully');
      setUrl('');
      fetchImages(); // Refresh the images list
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage(`❌ ${error.message || 'Error uploading image'}`);
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    desc: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: eventData.title,
          date: eventData.date,
          desc: eventData.desc,
          imageUrl: eventData.imageUrl
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add event');
      }

      const data = await response.json();
      setMessage('✅ Event added successfully');
      setEventData({ title: '', date: '', desc: '', imageUrl: '' });
      fetchEvents(); // Refresh the events list
    } catch (error) {
      console.error('Error submitting event:', error);
      setMessage(`❌ ${error.message || 'Error submitting event'}`);
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 p-6 flex flex-col text-white">
        <div className="flex items-center space-x-2 mb-10">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold">DK</div>
          <span className="text-xl font-bold">Hotel REAL LIFE</span>
        </div>
        <ul className="space-y-2 flex-1">
          {[
            { tab: 'dashboard', icon: '📊', label: 'Dashboard' },
            { tab: 'room', icon: '🛏', label: 'Room Bookings' },
            { tab: 'event', icon: '🍽', label: 'Event Bookings' },
            { tab: 'dining', icon: '🍴', label: 'Dining Bookings' },
            { tab: 'manageEvents', icon: '📅', label: 'Manage Events' },
            { tab: 'manageGallery', icon: '🖼️', label: 'Manage Gallery' },
          ].map(({ tab, icon, label }) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === tab 
                  ? 'bg-blue-700 shadow-inner' 
                  : 'hover:bg-blue-700/50'
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700/50 transition"
        >
          <span>🚪</span>
          <span>Log Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Notification */}
        {message && (
          <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center ${
            message.includes('✅')
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <span className="mr-2">{message.includes('✅') ? '✓' : '⚠'}</span>
            {message.replace(/[✅❌]/g, '')}
            <button 
              onClick={() => setMessage('')} 
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'dashboard' && (
            <AdminDashboard 
              roomAvailability={roomAvailability} 
              handleEditRoom={handleEditRoom} 
            />
          )}

          {activeTab === 'room' && (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Room Bookings</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={fetchRooms}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition flex items-center"
                  >
                    <span className="mr-2">↻</span> Refresh
                  </button>
                </div>
              </div>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : rooms.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-400 mb-2">🛏</div>
                  <p className="text-gray-600">No room bookings found</p>
                  <p className="text-sm text-gray-500 mt-1">All rooms are currently available</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rooms.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{booking.fullName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{booking.cid}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {booking.roomType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {new Date(booking.checkInDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{booking.guests}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => deleteBooking(booking.id, 'room')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'event' && (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Event Bookings</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={fetchEvents}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition flex items-center"
                  >
                    <span className="mr-2">↻</span> Refresh
                  </button>
                </div>
              </div>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : events.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-400 mb-2">🎉</div>
                  <p className="text-gray-600">No event bookings found</p>
                  <p className="text-sm text-gray-500 mt-1">Create events in the Manage Events section</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((booking) => (
                    <div key={booking.id} className="border rounded-xl p-5 hover:shadow-md transition bg-white">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-800">{booking.eventType}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                          {new Date(booking.eventDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Guest:</span> {booking.fullName}</p>
                        <p><span className="font-medium">CID:</span> {booking.cid}</p>
                        <p><span className="font-medium">Attendees:</span> {booking.guests}</p>
                        {booking.special && (
                          <p className="text-xs bg-yellow-50 p-2 rounded"><span className="font-medium">Note:</span> {booking.special}</p>
                        )}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => deleteBooking(booking.id, 'event')}
                          className="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'dining' && (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Dining Reservations</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={fetchDining}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition flex items-center"
                  >
                    <span className="mr-2">↻</span> Refresh
                  </button>
                </div>
              </div>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : dining.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-400 mb-2">🍽</div>
                  <p className="text-gray-600">No dining reservations found</p>
                  <p className="text-sm text-gray-500 mt-1">The restaurant is currently available</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dining.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{booking.fullName}</div>
                            <div className="text-sm text-gray-500">{booking.cid}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              {booking.diningType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">{new Date(booking.date).toLocaleDateString()}</div>
                            <div className="text-sm text-gray-500">{booking.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {booking.guests}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => deleteBooking(booking.id, 'dining')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'manageEvents' && (
            <div className="p-4">
              <h2>Add New Event</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input id="title" value={eventData.title} onChange={handleChange} placeholder="Title" required />
                <input id="date" type="date" value={eventData.date} onChange={handleChange} required />
                <textarea id="desc" value={eventData.desc} onChange={handleChange} placeholder="Description" required />
                <input id="imageUrl" value={eventData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Event</button>
              </form>
            </div>
          )}

          {activeTab === 'manageGallery' && (
            <div style={{ padding: "2rem" }}>
            <h2>Upload Image to Gallery</h2>
            <form onSubmit={handle_Submit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
              <label htmlFor="url">Image URL:</label>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <button type="submit" style={{ marginTop: "1rem" }}>Upload</button>
            </form>

            {smessage && <p>{smessage}</p>}

            <hr />
            <h3>Existing Images</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {images.map((img) => (
                <img key={img.id} src={img.url} alt="Uploaded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}