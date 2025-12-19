// shared.js - Shared functions for all pages

// ========================
// SHARED DATA (same across all pages)
// ========================
const allBooks = [
    // TOP PICKS (4 books - Featured, Highest Rated)
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925,
        summary: "A story of the fabulously wealthy Jay Gatsby...",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        featured: true,  // Mark as featured for top picks
        category: "top-picks"
    },
    {
        id: 2,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        summary: "The first novel in the Harry Potter series...",
        image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        featured: true,
        category: "top-picks"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        summary: "The story of racial injustice...",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        featured: true,
        category: "top-picks"
    },
    {
        id: 4,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        summary: "A dystopian social science fiction novel...",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        featured: true,
        category: "top-picks"
    },
    
    // HOME PAGE COLLECTION (12 books - Curated selection)
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813,
        summary: "A romantic novel of manners...",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        featured: false,
        category: "home-collection"
    },
    {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        summary: "A fantasy novel about the adventures...",
        image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        featured: false,
        category: "home-collection"
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        year: 1951,
        summary: "Story of Holden Caulfield's experiences...",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        featured: false,
        category: "home-collection"
    },
    {
        id: 8,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1954,
        summary: "Epic high-fantasy novel...",
        image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        featured: false,
        category: "home-collection"
    },
    {
        id: 9,
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        year: 1851,
        summary: "The voyage of the whaling ship Pequod...",
        image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.1,
        featured: false,
        category: "home-collection"
    },
    {
        id: 10,
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical",
        year: 1869,
        summary: "Chronicles the French invasion of Russia...",
        image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.2,
        featured: false,
        category: "home-collection"
    },
    {
        id: 11,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophical",
        year: 1988,
        summary: "Follows a young Andalusian shepherd...",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        featured: false,
        category: "home-collection"
    },
    {
        id: 12,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        year: 2008,
        summary: "In a dystopian future, teenagers fight...",
        image: "https://images.unsplash.com/photo-1531901599638-a89bb60971a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.3,
        featured: false,
        category: "home-collection"
    },
    {
        id: 13,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        year: 2003,
        summary: "A mystery thriller novel...",
        image: "https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        featured: false,
        category: "home-collection"
    },
    {
        id: 14,
        title: "The Shining",
        author: "Stephen King",
        genre: "Horror",
        year: 1977,
        summary: "A horror novel by Stephen King...",
        image: "https://images.unsplash.com/photo-1608889175123-8f362c6b5a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.4,
        featured: false,
        category: "home-collection"
    },
    {
        id: 15,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        year: 1932,
        summary: "A dystopian social science fiction novel...",
        image: "https://images.unsplash.com/photo-1539667468225-ebb2c5c3c72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.2,
        featured: false,
        category: "home-collection"
    },
    {
        id: 16,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: "Philosophical",
        year: 1943,
        summary: "A poetic tale with watercolour illustrations...",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        featured: false,
        category: "home-collection"
    },
    
    // EXPLORE PAGE BOOKS (Add more books here - at least 84 more)
    {
        id: 17,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Philosophical",
        year: 1866,
        summary: "A novel about the mental anguish of Rodion Raskolnikov...",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.4,
        featured: false,
        category: "explore-library"
    },
    {
        id: 18,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genre: "Fantasy",
        year: 1950,
        summary: "A series of fantasy novels...",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        featured: false,
        category: "explore-library"
    },
    // Add 82 more books here (IDs 19-100)
    // Use the generateBooks() function below to create them
];

const demoUsers = [
    {
        id: 1,
        name: "Demo Student",
        email: "student@school.com",
        password: "demo123",
        favorites: [1, 3, 7],
        myLibrary: [1, 2, 4, 8]
    },
    {
        id: 2,
        name: "Demo Teacher",
        email: "teacher@school.com",
        password: "demo123",
        favorites: [2, 5, 6],
        myLibrary: [1, 2, 3, 4, 5, 6]
    }
];

let comments = [
    {
        id: 1,
        bookId: 1,
        userId: 1,
        userName: "Demo Student",
        text: "Great book! Loved the characters.",
        date: "2023-10-15"
    },
    {
        id: 2,
        bookId: 1,
        userId: 2,
        userName: "Demo Teacher",
        text: "A classic that everyone should read.",
        date: "2023-10-10"
    }
];

// ========================
// BOOK GETTER FUNCTIONS
// ========================

// Get Top Picks (4 featured books)
function getTopPicks() {
    return allBooks.filter(book => book.featured === true).slice(0, 4);
}

// Get Home Collection (12 books for home page)
function getHomeCollection() {
    return allBooks.filter(book => book.category === "home-collection").slice(0, 12);
}

// Get All Books for Explore Page
function getAllBooks() {
    return allBooks;
}

// Get Books by Genre
function getBooksByGenre(genre) {
    return allBooks.filter(book => book.genre === genre);
}

// Get Books by Search Term
function searchBooks(searchTerm) {
    const term = searchTerm.toLowerCase();
    return allBooks.filter(book => 
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.genre.toLowerCase().includes(term) ||
        book.summary.toLowerCase().includes(term)
    );
}

// ========================
// SHARED FUNCTIONS
// ========================

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.style.transition = 'all 0.5s ease';
        document.documentElement.setAttribute('data-theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.5s';
        
        setTimeout(() => {
            icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            icon.style.transform = 'rotate(0deg)';
        }, 250);
        
        localStorage.setItem('theme', newTheme);
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Check Login Status
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Get Current User
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

// Notification System
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 3000);
}

// Create Book Card (reusable)
function createBookCard(book) {
    const currentUser = getCurrentUser();
    const isFavorite = currentUser && currentUser.favorites && currentUser.favorites.includes(book.id);
    const inLibrary = currentUser && currentUser.myLibrary && currentUser.myLibrary.includes(book.id);
    
    return `
        <div class="book-card" data-id="${book.id}" data-genre="${book.genre.toLowerCase()}">
            <div class="book-badge-container">
                ${isFavorite ? '<span class="favorite-badge"><i class="fas fa-heart"></i></span>' : ''}
                ${inLibrary ? '<span class="library-badge"><i class="fas fa-bookmark"></i></span>' : ''}
                <img src="${book.image}" alt="${book.title}" class="book-img">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author} (${book.year})</p>
                <div class="book-meta">
                    <span class="book-genre">${book.genre}</span>
                    <span class="book-rating">⭐ ${book.rating || '4.0'}</span>
                </div>
                <button class="overview-btn" onclick="window.location.href='book-details.html?id=${book.id}'">
                    <i class="fas fa-eye"></i> Overview
                </button>
            </div>
        </div>
    `;
}

// Book details functions
function toggleFavorite(bookId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    let favorites = currentUser.favorites || [];
    const isFavorite = favorites.includes(bookId);
    
    if (isFavorite) {
        favorites = favorites.filter(id => id !== bookId);
    } else {
        favorites.push(bookId);
    }
    
    currentUser.favorites = favorites;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return !isFavorite;
}

function toggleLibrary(bookId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    let myLibrary = currentUser.myLibrary || [];
    const inLibrary = myLibrary.includes(bookId);
    
    if (inLibrary) {
        myLibrary = myLibrary.filter(id => id !== bookId);
    } else {
        myLibrary.push(bookId);
    }
    
    currentUser.myLibrary = myLibrary;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return !inLibrary;
}

// Update the addComment function in shared.js
async function addComment(bookId, text, userName) {
    if (!text.trim()) return null;
    
    try {
        const currentUser = getCurrentUser();
        
        // Send to backend
        const response = await fetch('http://localhost:5000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookId: bookId,
                userId: currentUser.id,
                userName: userName || currentUser.name,
                text: text
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Also add to local array for immediate display
            const newComment = {
                id: comments.length + 1,
                bookId: bookId,
                userName: userName || currentUser.name,
                text: text,
                date: new Date().toLocaleDateString()
            };
            comments.push(newComment);
            return newComment;
        }
        return null;
    } catch (error) {
        console.error('Comment save error:', error);
        // Fallback to localStorage
        const newComment = {
            id: comments.length + 1,
            bookId: bookId,
            userName: userName || 'User',
            text: text,
            date: new Date().toLocaleDateString()
        };
        comments.push(newComment);
        return newComment;
    }
}

// Book generator (optional - use if you need more books)
function generateBooks(count) {
    const genres = ['Classic', 'Fantasy', 'Fiction', 'Dystopian', 'Romance', 'Mystery', 
                   'Horror', 'Science Fiction', 'Biography', 'Historical', 'Philosophical', 
                   'Adventure', 'Young Adult', 'Children', 'Poetry', 'Drama'];
    
    const authors = [
        'J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'Agatha Christie',
        'J.R.R. Tolkien', 'Jane Austen', 'Charles Dickens', 'Mark Twain',
        'Ernest Hemingway', 'F. Scott Fitzgerald', 'Harper Lee', 'George Orwell',
        'Virginia Woolf', 'Toni Morrison', 'Gabriel Garcia Marquez', 'Chinua Achebe'
    ];
    
    const bookTitles = [
        'The Silent Echo', 'Eternal Dreams', 'Whispers of Time', 'Shadows of Yesterday',
        'The Last Guardian', 'Echoes of Fate', 'The Crystal Key', 'Midnight Sun',
        'Ocean of Stars', 'The Forgotten Realm', 'Winter\'s Heart', 'Summer Breeze',
        'Autumn Leaves', 'Spring Awakening', 'Mountain Peak', 'River\'s End',
        'Desert Rose', 'Forest Song', 'City Lights', 'Country Roads'
    ];
    
    const generatedBooks = [];
    let id = allBooks.length + 1;
    
    for (let i = 0; i < count; i++) {
        const genre = genres[Math.floor(Math.random() * genres.length)];
        const author = authors[Math.floor(Math.random() * authors.length)];
        const title = bookTitles[Math.floor(Math.random() * bookTitles.length)];
        
        generatedBooks.push({
            id: id++,
            title: `${title} ${i + 1}`,
            author: author,
            genre: genre,
            year: Math.floor(Math.random() * 100) + 1920,
            summary: `An amazing ${genre.toLowerCase()} book about...`,
            image: `https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`,
            rating: (Math.random() * 2 + 3).toFixed(1),
            featured: false,
            category: 'explore-library'
        });
    }
    
    return generatedBooks;
}

// Add more books if needed (run this in browser console)
function addMoreBooksToExplore() {
    // Generate 84 more books
    const moreBooks = generateBooks(84);
    
    // Add them to allBooks array
    window.sharedData.allBooks.push(...moreBooks);
    
    console.log(`Added ${moreBooks.length} more books! Total: ${window.sharedData.allBooks.length}`);
    return moreBooks;
}
// Guard function for protected pages
function requireLogin(redirectTo = 'index.html') {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        showNotification('🔒 Please login to access this page!', 'warning');
        
        // Store the intended page to return to after login
        const currentPath = window.location.pathname + window.location.search;
        if (currentPath && !currentPath.includes('index.html')) {
            sessionStorage.setItem('redirectAfterLogin', currentPath);
        }
        
        setTimeout(() => {
            window.location.href = redirectTo;
        }, 2000);
        
        return false;
    }
    
    return true;
}
// Uncomment to add books automatically
/* addMoreBooksToExplore();
 */
// ========================
// EXPORT TO WINDOW OBJECT
// ========================
window.sharedData = {
    // Data
    allBooks,
    demoUsers,
    comments,
    
    // Book getter functions
    getTopPicks,
    getHomeCollection,
    getAllBooks,
    getBooksByGenre,
    searchBooks,
    
    // Shared functions
    initThemeToggle,
    getCurrentUser,
    checkLogin,
    showNotification,
    createBookCard,
     requireLogin,
    
    // Book details functions
    toggleFavorite,
    toggleLibrary,
    addComment,
    
    // Generator (optional)
    generateBooks
};
// Update user stats in localStorage (for when library/favorites change)
function updateUserStats(userId, updates) {
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
        Object.assign(currentUser, updates);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    // Also update in demoUsers array for persistence
    const userIndex = demoUsers.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        Object.assign(demoUsers[userIndex], updates);
    }
}
