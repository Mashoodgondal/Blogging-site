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
