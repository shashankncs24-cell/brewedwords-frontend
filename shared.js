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
        summary: "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King and the riotous parties he attended on Long Island's North Shore in 1922.",
        image:"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
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
        summary: "Harry Potter and the Philosopher's Stone (also known as Harry Potter and the Sorcerer's Stone in the United States, India, and the Philippines) is a 2001 fantasy film directed by Chris Columbus and written by Steve Kloves, based on the 1997 novel by J. K. Rowling. It is the first instalment in the Harry Potter film series, and stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
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
        summary: "To Kill a Mockingbird is a 1960 Southern Gothic novel by American author Harper Lee. It became instantly successful after its release; in the United States, it is widely read in high schools and middle schools.[1] To Kill a Mockingbird won the Pulitzer Prize a year after its release, and it has become a classic of modern American literature.[2] The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
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
        summary: "1984 is a dystopian novel by English author George Orwell, published in 1949. Set in a totalitarian future where the superstate Oceania is ruled by the omnipresent Big Brother and the Party, the story follows Winston Smith, a man who works at the Ministry of Truth rewriting historical records. As Winston begins to rebel through private thoughts and a forbidden relationship with Julia, he confronts the terrifying mechanisms of state control, including mass surveillance, propaganda, thought policing, and psychological manipulation. The novel explores themes of truth, freedom, individuality, and the abuse of power.",
        image: "https://iowastatedaily.com/wp-content/uploads/2024/09/abdul-ahad-sheikh-kUYexCmEPuI-unsplash-898x1200.jpg",
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
        summary: "Pride and Prejudice is a romantic novel of manners written by Jane Austen, first published anonymously in 1813. It is one of the most beloved and enduring works in English literature, celebrated for its incisive wit, social commentary, and the evolving relationship between its two central characters, Elizabeth Bennet and Fitzwilliam Darcy.",
        image: "https://m.media-amazon.com/images/I/61YlBaMZrWL.jpg",
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
        summary: "The Hobbit, or There and Back Again is a 1937 fantasy novel by English author J. R. R. Tolkien, widely recognized as a classic in children's literature and one of the best-selling books of all time, with over 100 million copies sold. Set in the fictional world of Middle-earth, the story follows Bilbo Baggins, a home-loving hobbit who joins the wizard Gandalf and thirteen dwarves led by Thorin Oakenshield on a quest to reclaim their homeland and treasure from the dragon Smaug.",
        image: "https://m.media-amazon.com/images/I/51p3Yk2w1qL.jpg",
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
        summary: "The Catcher in the Rye is a 1951 American coming-of-age novel by J. D. Salinger, widely regarded as a classic of 20th-century literature. Narrated by Holden Caulfield, a disenchanted 16-year-old who has been expelled from his fourth prep school, the novel explores themes of alienation, innocence, identity, and the perceived "phoniness" of adult society",
        image: "https://ih1.redbubble.net/image.1141779829.5696/fposter,small,wall_texture,square_product,600x600.jpg",
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
        summary: "The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien, originally published in three volumes between 1954 and 1955: The Fellowship of the Ring (1954), The Two Towers (1955), and The Return of the King (1955). Set in the fictional world of Middle-earth, it began as a sequel to Tolkien's The Hobbit and evolved into a monumental work of over 1,000 pages. The story follows Frodo Baggins, a hobbit who inherits the One Ring, a powerful artifact created by the Dark Lord Sauron to dominate all life. Frodo joins the Fellowship of the Ring on a quest to destroy the Ring in the fires of Mount Doom in Mordor",
        image: "https://images.fathomevents.com/image/upload/w_400,dpr_2,f_auto,q_auto/v1764087903/Events/2026/2108/1000x1480_LOTR_Fellowshi_FE_Ticketing.jpg.jpg",
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
        summary: "Moby-Dick; or, The Whale is a classic 1851 novel by Herman Melville, widely regarded as one of the greatest works in American literature. The story is narrated by Ishmael, who recounts the obsessive voyage of the whaling ship Pequod, commanded by Captain Ahab. Driven by vengeance, Ahab seeks to destroy Moby Dick, a massive white sperm whale that previously bit off his leg. The novel blends adventure, philosophy, and symbolism, exploring themes of obsession, fate, good and evil, and humanity's struggle against nature.",
        image: "https://m.media-amazon.com/images/I/615gYAMDHQL.jpg",
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
        summary: "War and Peace is a literary masterpiece by Leo Tolstoy, originally published serially between 1865 and 1867, with the complete book edition released in 1869. Set during the Napoleonic Wars, the novel blends fictional narrative with philosophical and historical essays, following the lives of Russian aristocratic families—the Rostovs, Bolkonskys, and Bezukhovs—through war, love, and personal transformation.",
        image: "https://m.media-amazon.com/images/I/61V2NedeHQL.jpg",
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
        summary: "The Alchemist is a philosophical novel by Brazilian author Paulo Coelho, first published in 1988 in Portuguese as O Alquimista. The story follows Santiago, an Andalusian shepherd boy, who embarks on a journey to the Egyptian pyramids after having a recurring dream about hidden treasure. Along the way, he meets spiritual guides like Melchizedek and the alchemist, learns to follow omens, and discovers that his true treasure is the journey itself and the self-discovery it brings..",
        image: "https://m.media-amazon.com/images/M/MV5BMGRiZjhjOGEtNzQzYS00OWVhLTk4NmItNDRmMDVhMmZhNjVjXkEyXkFqcGc@.jpg",
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
        summary: "he Hunger Games is a young adult dystopian novel series written by American author Suzanne Collins. The series is set in the fictional nation of Panem, a post-apocalyptic North America ruled by the wealthy Capitol and divided into 12 (originally 13) impoverished districts. As punishment for a past rebellion, each district must annually send one boy and one girl—called "tributes"—between the ages of 12 and 18 to compete in the Hunger Games, a televised fight to the death.",
        image: "https://m.media-amazon.com/images/I/6187qTWnWML.jpg",
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
        summary: "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown, and the second in his Robert Langdon series. It follows symbologist Robert Langdon and cryptologist Sophie Neveu as they investigate a murder at the Louvre Museum in Paris, uncovering a conspiracy tied to the Holy Grail, the Priory of Sion, and the idea that Jesus Christ and Mary Magdalene had a bloodline. The novel blends art, history, and religious speculation, drawing from sources like Holy Blood, Holy Grail, though Brown stated it was not used directly in research.",
        image: "https://m.media-amazon.com/images/M/MV5BN2Y1OTlmYjItZTQ4YS00YTYwLTlmNjAtNmE3ZjM0OGM2NjMzXkEyXkFqcGc@.jpg",
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
        summary: "The Shining is a seminal psychological horror story originally written as a novel by Stephen King in 1977 and later adapted into a critically acclaimed 1980 film directed by Stanley Kubrick. The story centers on the Torrance family—Jack, Wendy, and their psychically gifted son Danny—who become isolated at the haunted Overlook Hotel during the winter season. As supernatural forces and Jack's unraveling mental state converge, the family faces escalating terror and violence",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Shining_(1997_mini-series_poster).jpg/250px-The_Shining_(1997_mini-series_poster).jpg",
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
        summary: "Brave New World is a dystopian science fiction novel written by Aldous Huxley, first published in 1932. Set in a futuristic World State in AF 632 (AD 2540), the novel explores a society driven by technological control, genetic engineering, and psychological conditioning. Citizens are artificially created, divided into a rigid caste system (Alphas to Epsilons), and kept docile through the use of a pleasure-inducing drug called soma.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/512px-BraveNewWorld_FirstEdition.jpg",
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
        summary: "The Little Prince is a novella written and illustrated by French writer and aviator Antoine de Saint-Exupéry, first published in April 1943 in both English and French in the United States. The story follows a young prince who travels from planet to planet, encountering various adult characters who symbolize different human flaws, before arriving on Earth. Through his journey, the tale explores themes of loneliness, friendship, love, and loss, offering profound insights into human nature and the innocence of childhood.",
        image: "https://booksatruestory.com/wp-content/uploads/2017/08/Book-Cover-The-Little-Prince-Antoine-De-Saint-Exupery.jpg",
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
        summary: "Crime and Punishment is a seminal psychological novel by Fyodor Dostoevsky, first published in 1866 in the literary journal The Russian Messenger. It is widely regarded as one of the greatest works of world literature and a cornerstone of Dostoevsky's mature period.",
        image: "https://www.crossword.in/cdn/shop/files/61B0z7UOBlL._SL1200.jpg?v=1750327810&width=391",
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
        summary: The Chronicles of Narnia is a series of seven high fantasy novels by British author C. S. Lewis, originally published between 1950 and 1956. Illustrated by Pauline Baynes, the series is set in the magical world of Narnia, a land of talking animals, mythical creatures, and epic battles between good and evil. The story centers on various children from Earth who are drawn into Narnia, where they join Aslan, a wise and powerful lion, in shaping the realm’s destiny.",
        image: "https://m.media-amazon.com/images/I/91vaWN237nL.jpg",
        rating: 4.6,
        featured: false,
        category: "explore-library"
    },
    {
        id=19,
  title: "Fourth Wing",
  author: "Rebecca Yarros",
  genre: "Fantasy",
  year: 2023,
  summary: "Fourth Wing follows Violet Sorrengail, a frail but determined young woman forced to join a brutal dragon-rider war college, where deadly trials, political intrigue, and forbidden attraction threaten her life as she fights for a place among elite riders.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676577105i/61431922.jpg",
  rating: 4.6,
  featured: true,
  category: "explore-library"
},
{
    id=20,
  title: "Iron Flame",
  author: "Rebecca Yarros",
  genre: "Fantasy",
  year: 2023,
  summary: "In Iron Flame, Violet returns to Basgiath War College facing harsher tests, volatile alliances, and escalating war, as secrets about dragon riders, rebels, and the empire force her to question who the real enemy is.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684763269i/70426189.jpg",
  rating: 4.4,
  featured: true,
  category: "explore-library"
},
{
    id=21,
  title: "A Court of Thorns and Roses",
  author: "Sarah J. Maas",
  genre: "Fantasy",
  year: 2015,
  summary: "A Court of Thorns and Roses follows huntress Feyre Archeron after she kills a faerie wolf and is taken to a magical court, where she becomes entangled in ancient curses, deadly politics, and a dangerous romance with a High Lord.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577044647i/16096824.jpg",
  rating: 4.2,
  featured: false,
  category: "explore-library"
},
{
    id=22,
  title: "A Court of Silver Flames",
  author: "Sarah J. Maas",
  genre: "Fantasy",
  year: 2021,
  summary: "A Court of Silver Flames centers on Nesta Archeron as she battles trauma, rage, and self-loathing while training with Cassian, uncovering deadly new powers and a looming threat against the Night Court.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1606823984i/50659468.jpg",
  rating: 4.3,
  featured: false,
  category: "explore-library"
},
{
    id=24,
  title: "The Sunlit Man",
  author: "Brandon Sanderson",
  genre: "Fantasy",
  year: 2023,
  summary: "The Sunlit Man follows Nomad, a fugitive world-hopper stranded on a sun-scorched planet where survival requires constant movement, as he races across burning landscapes while hunted by powerful enemies.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684178853i/62918522.jpg",
  rating: 4.4,
  featured: false,
  category: "explore-library"
},
{
    id=25,
  title: "Godkiller",
  author: "Hannah Kaner",
  genre: "Fantasy",
  year: 2023,
  summary: "Godkiller introduces Kissen, a seasoned slayer of outlawed gods, who becomes bound to a noble girl and her secret god of white lies, forcing them on a perilous journey through a land scarred by divine war.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653945043i/61215578.jpg",
  rating: 4.1,
  featured: false,
  category: "explore-library"
},
{
    id=26
  title: "The Foxglove King",
  author: "Hannah Whitten",
  genre: "Fantasy",
  year: 2023,
  summary: "The Foxglove King follows death-magic smuggler Lore as she is dragged into the king’s court and forced to spy on a corrupt prince, uncovering necromantic conspiracies and forbidden romance in a decaying empire.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658779122i/61191389.jpg",
  rating: 3.9,
  featured: false,
  category: "explore-library"
},
{
    id=27
  title: "Sword Catcher",
  author: "Cassandra Clare",
  genre: "Fantasy",
  year: 2023,
  summary: "Sword Catcher tells the story of Kel, a body-double trained to die for a prince, and Lin, a healer with forbidden magic, whose paths entwine in a city of ruthless politics, ancient secrets, and dangerous prophecy.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675949647i/58891580.jpg",
  rating: 3.9,
  featured: false,
  category: "explore-library"
},
{
    id=28,
  title: "Legends & Lattes",
  author: "Travis Baldree",
  genre: "Fantasy",
  year: 2022,
  summary: "Legends & Lattes follows Viv, an orc mercenary who retires from adventuring to open a cozy coffee shop, building found family, facing low-stakes threats, and discovering a quieter kind of heroism.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640782055i/57459530.jpg",
  rating: 4.2,
  featured: false,
  category: "explore-library"
},
{
    id=29,
  title: "Emily Wilde's Encyclopaedia of Faeries",
  author: "Heather Fawcett",
  genre: "Fantasy",
  year: 2023,
  summary: "Emily Wilde's Encyclopaedia of Faeries follows a prickly scholar researching faerie lore in a remote village, where she documents dangerous fae, clashes with a charming rival, and stumbles into an enchantment-laced mystery.",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651686370i/59454940.jpg",
  rating: 4.1,
  featured: false,
  category: "explore-library"
}
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
