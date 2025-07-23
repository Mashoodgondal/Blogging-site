'use client';

import React, { useState } from 'react';

const HOME = () => {
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!imageFile) {
            console.warn('Please select an image first.');
            return;
        }

        console.log('Uploading file:', imageFile.name, imageFile.type);

        const formData = new FormData();
        formData.append('file', imageFile);

        try {
            const response = await fetch('https://reciepe-fastapi-backend.vercel.app/api/from-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Recipe Result:', data);
        } catch (error) {
            console.error('❌ Error fetching recipe:', error.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Recipe from Image</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button
                onClick={handleUpload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Upload & Get Recipe
            </button>
        </div>
    );
};

export default HOME;
