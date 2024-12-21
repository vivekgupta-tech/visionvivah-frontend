import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [imageLink, setImageLink] = useState('');
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [deletingImage, setDeletingImage] = useState(null); // For toggling delete confirmation

  // Fetch gallery images on component mount
  useEffect(() => {
    axios
      .get('http://localhost:4001/Gallery')
      .then((response) => {
        setGallery(response.data);
      })
      .catch((error) => {
        setError('Error fetching images');
      });
  }, []);

  // Handle adding a new image
  const handleAddImage = () => {
    if (!imageLink) {
      setError('Please enter a valid image URL');
      return;
    }

    axios
      .post('http://localhost:4001/Gallery', { image: imageLink })
      .then((response) => {
        setSuccess('Image added successfully!');
        setImageLink('');
        setGallery([...gallery, { image: imageLink }]);
      })
      .catch((error) => {
        setError('Failed to add image');
      });
  };

  // Handle deleting an image
  const handleDeleteImage = (id) => {
    if (deletingImage === id) {
      // Confirm delete and delete image
      axios
        .delete(`http://localhost:4001/Gallery/${id}`)
        .then((response) => {
          setSuccess('Image deleted successfully!');
          setGallery(gallery.filter((image) => image.id !== id));
        })
        .catch((error) => {
          setError('Failed to delete image');
        });
      setDeletingImage(null); // Reset delete confirmation
    } else {
      // Show delete confirmation
      setDeletingImage(id);
    }
  };

  return (
    <>
    <div className='pt-48'>
    <div style={{ padding: '20px' }}  >
      <h1>Admin Panel</h1>

      {/* Input form to add a new image */}
      <div>
        <input
          type="text"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Enter Image URL"
          className='p-2 w-96 border-2 border-blue-500 rounded-lg bordr-2 border-sky-500'
        />
        <button
          onClick={handleAddImage}
         className='text-lg mr-9 ml-5 mt-2 rounded-xl hover:bg-green-500 hover:rounded-xl bg-blue-500 p-2  text-white font-semibold'
        >
          Add Image
        </button>
      </div>

      {/* Error and Success Messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      {/* Display gallery with Delete option */}
      <h1 className='text-2xl font-bold text-center text-red-500 pt-10'>Admin Panel</h1>
      <h2 className='text-2xl font-bold text-center text-sky-400 pb-10 pt-10'>Image Gallery</h2>

      <div className='flex flex-wrap w-[100%] gap-20 ml-10'>
        {gallery.map((image, index) => (

          <div key={index} className ="h-[55vh]  border-2 border-blue-500   justify-center w-[25.9%] mb-20">
            <img
              src={image.image}
              alt={`Gallery Image ${index}`}
              style={{ objectFit: 'cover' }}
              className='h-[100%] w-[100%] '
            />
            {deletingImage === image.id ? (
              <div>
    <button onClick={() => handleDeleteImage(image.id)} className='text-lg mr-9 ml-5 mt-2 rounded-xl hover:bg-red-500 hover:rounded-xl bg-green-500 p-2  text-white font-semibold'>
        Confirm Delete
                </button>
    <button onClick={() => setDeletingImage(null)} className='text-lg mr-9 m-2 rounded-xl hover:bg-red-500 text-white font-semibold hover:rounded-xl bg-green-500 p-2 '> Cancel </button>
              </div>
            ) : (
              <button
                onClick={() => handleDeleteImage(image.id)}
                className="hover:bg-red-500 rounded-[25vh] border-2 border-white text-lg text-bold transition duration-300 w-60 p-2 mt-4  ml-8 relative hover:text-white hover:font-semibold"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default AdminPage;
