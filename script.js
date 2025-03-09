// Get the edit profile button and modal
const editProfileButton = document.getElementById('edit-profile');
const editProfileModal = document.getElementById('edit-profile-modal');

// Add event listener to the edit profile button
editProfileButton.addEventListener('click', () => {
    // Show the edit profile modal
    editProfileModal.classList.add('show');
});

// Add event listener to the modal background
editProfileModal.addEventListener('click', (e) => {
if (e.target === editProfileModal) {
        // Hide the modal when clicking outside the modal content
        editProfileModal.classList.remove('show');
    }
});

// Function to populate user data (mock data for demonstration)
function populateUserData() {
    document.getElementById('username').textContent = 'JohnDoe';
    document.getElementById('email').textContent = 'johndoe@example.com';
    // Populate listening history and recommendations
    const historyList = document.getElementById('history-list');
    const recommendationList = document.getElementById('recommendation-list');

    // Mock data for listening history
    const historyItems = [
        'Audiobook 1 - 2 hours ago',
        'Audiobook 2 - 1 day ago',
        'Audiobook 3 - 3 days ago'
    ];
    historyItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });

    // Mock data for recommendations
    const recommendations = [
        'Recommended Audiobook 1',
        'Recommended Audiobook 2',
        'Recommended Audiobook 3'
    ];
    recommendations.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        recommendationList.appendChild(li);
    });
}

// Call the function to populate user data on page load
window.onload = populateUserData;