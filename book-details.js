// book-details.js - Book details page functionality

// DOM Elements
let currentBookId = null;
let currentUser = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    if (window.sharedData && window.sharedData.initThemeToggle) {
        window.sharedData.initThemeToggle();
    }
    
    // Check login
   // Check login with alert
if (!window.sharedData.requireLogin('index.html')) {
    return;
}
currentUser = window.sharedData.getCurrentUser();  // This is OK since declared
    
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    currentBookId = parseInt(urlParams.get('id'));
    
    if (!currentBookId) {
        showErrorMessage('Book not found. <a href="index.html">Return to home page</a>');
        return;
    }
    
    // Load book details
    loadBookDetails();
});

async function loadBookDetails() {
    const bookDetailsContent = document.getElementById('bookDetailsContent');
    const allBooks = window.sharedData.allBooks || [];
    const book = allBooks.find(b => b.id === currentBookId);
    
    if (!book) {
        showErrorMessage('Book not found. <a href="index.html">Return to home page</a>');
        return;
    }
    
    // Check if book is in user's favorites/library
    const isFavorite = currentUser && currentUser.favorites && currentUser.favorites.includes(currentBookId);
    const inLibrary = currentUser && currentUser.myLibrary && currentUser.myLibrary.includes(currentBookId);
    
    // Create book details HTML
    bookDetailsContent.innerHTML = `
        <div class="book-details">
            <div class="book-cover">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info-details">
                <h1>${book.title}</h1>
                <h3>by ${book.author}</h3>
                
                <div class="book-meta-info">
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>Published: ${book.year}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-tag"></i>
                        <span>Genre: <span class="book-genre">${book.genre}</span></span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-star"></i>
                        <span class="rating-display">${book.rating || '4.0'} ⭐</span>
                    </div>
                </div>
                
                <div class="book-actions">
                    <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" id="favoriteBtn" onclick="toggleFavorite()">
                        <i class="fas fa-heart"></i>
                        ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <button class="action-btn library-btn ${inLibrary ? 'active' : ''}" id="libraryBtn" onclick="toggleLibrary()">
                        <i class="fas fa-bookmark"></i>
                        ${inLibrary ? 'Remove from Library' : 'Add to My Library'}
                    </button>
                </div>
                
                <div class="book-summary">
                    <h3>Summary</h3>
                    <p>${book.summary}</p>
                </div>
            </div>
        </div>
    `;
    
    // Load comments
    loadComments();
}

async function loadComments() {
    const commentsList = document.getElementById('commentsList');
    const commentFormContainer = document.getElementById('commentFormContainer');
    
    try {
        // Load comments from backend
        const response = await fetch(`http://localhost:5000/api/comments/book/${currentBookId}`);
        const data = await response.json();
        
        // Display comments
        if (data.success && data.comments && data.comments.length > 0) {
            commentsList.innerHTML = data.comments.map(comment => `
                <div class="comment-card">
                    <div class="comment-header">
                        <strong>${comment.userName}</strong>
                        <span>${comment.date}</span>
                    </div>
                    <div class="comment-content">
                        <p>${comment.text}</p>
                    </div>
                </div>
            `).join('');
        } else {
            commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
        }
        
        // Show comment form if user is logged in
        if (currentUser) {
            commentFormContainer.innerHTML = `
                <h3>Add Your Comment</h3>
                <form id="addCommentForm">
                    <textarea id="commentText" placeholder="Share your thoughts about this book..." required></textarea>
                    <button type="submit" class="auth-btn">Post Comment</button>
                </form>
            `;
            
            document.getElementById('addCommentForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                await addComment();
            });
        } else {
            commentFormContainer.innerHTML = `
                <p><a href="index.html">Login</a> to add a comment.</p>
            `;
        }
    } catch (error) {
        console.error('Load comments error:', error);
        commentsList.innerHTML = '<p class="no-comments">Could not load comments.</p>';
    }
}

function toggleFavorite() {
    if (!currentUser) {
        window.sharedData.showNotification('Please login first!', 'warning');
        window.location.href = 'index.html';
        return;
    }
    
    const result = window.sharedData.toggleFavorite(currentBookId);
    const favoriteBtn = document.getElementById('favoriteBtn');
    
    if (result === true) {
        // Added to favorites
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        favoriteBtn.classList.add('active');
        window.sharedData.showNotification('Added to favorites!', 'success');
    } else if (result === false) {
        // Removed from favorites
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';
        favoriteBtn.classList.remove('active');
        window.sharedData.showNotification('Removed from favorites', 'info');
    }
    
    // Update current user data
    currentUser = window.sharedData.getCurrentUser();
}

function toggleLibrary() {
    if (!currentUser) {
        window.sharedData.showNotification('Please login first!', 'warning');
        window.location.href = 'index.html';
        return;
    }
    
    const result = window.sharedData.toggleLibrary(currentBookId);
    const libraryBtn = document.getElementById('libraryBtn');
    
    if (result === true) {
        // Added to library
        libraryBtn.innerHTML = '<i class="fas fa-bookmark"></i> Remove from Library';
        libraryBtn.classList.add('active');
        window.sharedData.showNotification('Added to your library!', 'success');
    } else if (result === false) {
        // Removed from library
        libraryBtn.innerHTML = '<i class="fas fa-bookmark"></i> Add to My Library';
        libraryBtn.classList.remove('active');
        window.sharedData.showNotification('Removed from your library', 'info');
    }
    
    // Update current user data
    currentUser = window.sharedData.getCurrentUser();
}

async function addComment() {
    if (!currentUser) {
        window.sharedData.showNotification('Please login to comment!', 'warning');
        window.location.href = 'index.html';
        return;
    }
    
    const commentText = document.getElementById('commentText');
    const text = commentText.value.trim();
    
    if (!text) {
        window.sharedData.showNotification('Please enter a comment!', 'error');
        return;
    }
    
    try {
        // Send comment to backend
        const response = await fetch('http://localhost:5000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookId: currentBookId,
                userId: currentUser.id,
                userName: currentUser.name,
                text: text
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            window.sharedData.showNotification('Comment added successfully!', 'success');
            commentText.value = '';
            loadComments(); // Reload comments from backend
        } else {
            window.sharedData.showNotification(data.message || 'Failed to add comment', 'error');
        }
    } catch (error) {
        console.error('Add comment error:', error);
        window.sharedData.showNotification('Could not add comment. Please try again.', 'error');
    }
}

function showErrorMessage(message) {
    const bookDetailsContent = document.getElementById('bookDetailsContent');
    bookDetailsContent.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--gray);">
            <i class="fas fa-exclamation-triangle fa-3x" style="margin-bottom: 1rem;"></i>
            <p style="font-size: 1.2rem;">${message}</p>
        </div>
    `;
}