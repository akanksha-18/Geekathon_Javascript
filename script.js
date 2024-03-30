// Function to handle resume upload
function uploadResume() {
    const fileInput = document.getElementById('resumeFile');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('resume', file);

        fetch("https://api.apilayer.com/resume_parser/url?url=", {
            method: 'POST',
            body: formData,
            headers: {
                "apikey": "qrAJx6cKcZHTgYR8BjBW6VhmE8LBd1KF"
            }
        })
        .then(response => response.text())
        .then(result => {
            // Call a function to process the result
            processResume(result);
        })
        .catch(error => console.error('Error uploading resume:', error));
    }
}

// Function to process the fetched resume data
function processResume(resumeData) {
    // Assuming resumeData contains the fetched resume data
    console.log('Fetched resume data:', resumeData);

    // Now you can use the fetched resume data as needed
    // For example, display it in the feedback container
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = `
        <h3>Fetched Resume Data</h3>
        <pre>${resumeData}</pre>
    `;

    // You can also further process the resume data or perform other actions
}

