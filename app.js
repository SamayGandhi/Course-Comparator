const categoriesList = ["All", "Web Dev", "App Dev", "Data Science", "Cloud", "Cybersecurity", "Design", "Marketing", "Finance", "GATE", "Core Engineering"];

// 🌟 ADDED 'videos' AND 'notes' PROPERTIES TO ALL COURSES 🌟
const courses = [
    { id: 1, cat: "Web Dev", title: "Full Stack Web Mastery", platform: "Udemy", instructor: "Dr. Angela Yu", price: 3499, rating: 4.8, dur: "65 Hours", level: "Beginner-Advanced", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Comprehensive", videos: "400+ Lectures", notes: "Downloadable PDFs", reviews: [{author: "Rahul M.", text: "Amazing explanations! Solved all my doubts perfectly.", verified: true}] },
    { id: 2, cat: "Web Dev", title: "Frontend Pro w/ React", platform: "Coursera", instructor: "Meta Staff", price: 1200, rating: 4.7, dur: "7 Months", level: "Beginner", cert: "Yes (Paid)", lang: "English", access: "1 Year", syllabus: "Industry-focused", videos: "120+ Videos", notes: "Assignments Only", reviews: [{author: "Priya S.", text: "Very professional, but pacing is a bit slow.", verified: true}] },
    { id: 3, cat: "Web Dev", title: "Complete Web Dev", platform: "YouTube", instructor: "CodeWithHarry", price: 0, rating: 4.9, dur: "100 Hours", level: "All Levels", cert: "No", lang: "Hindi/English", access: "Lifetime", syllabus: "Practical Base", videos: "130 Videos", notes: "Source Code Provided", reviews: [{author: "Aman K.", text: "Best free resource. Hindi explanations are top-notch.", verified: true}] },
    
    { id: 4, cat: "App Dev", title: "iOS App Development", platform: "Udemy", instructor: "Angela Yu", price: 3899, rating: 4.8, dur: "55 Hours", level: "Beginner", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Project-based", videos: "350 Lectures", notes: "PDFs & Code", reviews: [{author: "Neha V.", text: "Built 5 real apps during this course!", verified: true}] },
    { id: 5, cat: "App Dev", title: "Flutter & Dart Masterclass", platform: "Udacity", instructor: "Google Experts", price: 5000, rating: 4.6, dur: "2 Months", level: "Intermediate", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Comprehensive", videos: "80 High-Quality Videos", notes: "Interactive Labs", reviews: [{author: "Arjun P.", text: "Great UI components, but requires some OOP knowledge.", verified: true}] },
    
    { id: 6, cat: "Data Science", title: "Python for Data Science", platform: "IBM", instructor: "IBM Experts", price: 0, rating: 4.9, dur: "3 Weeks", level: "Beginner", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Core Fundamentals", videos: "45 Lectures", notes: "IBM Official Guides", reviews: [{author: "Sanya L.", text: "IBM's certificate holds great value. Very structured.", verified: true}] },
    { id: 7, cat: "Data Science", title: "Data Analytics Course", platform: "NPTEL", instructor: "IIT Madras", price: 0, rating: 4.7, dur: "12 Weeks", level: "Intermediate", cert: "Yes (Exam)", lang: "English", access: "12 Weeks", syllabus: "Academic/Deep", videos: "60 Lectures", notes: "Detailed Transcripts", reviews: [{author: "Vikram R.", text: "Heavy on math and theory, true IIT standard.", verified: true}] },
    { id: 8, cat: "Data Science", title: "Prompt Engineering for AI", platform: "Coursera", instructor: "Vanderbilt Univ.", price: 2000, rating: 4.8, dur: "18 Hours", level: "Beginner", cert: "Yes", lang: "English", access: "6 Months", syllabus: "Modern Tech", videos: "30 Videos", notes: "Prompt Templates", reviews: [{author: "Rohan D.", text: "Learned how to actually use ChatGPT for development.", verified: true}] },
    
    { id: 9, cat: "Cloud", title: "AWS Solutions Architect", platform: "Udemy", instructor: "Stephane Maarek", price: 3499, rating: 4.7, dur: "27 Hours", level: "Intermediate", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Exam-oriented", videos: "250 Lectures", notes: "Cheat Sheets", reviews: [{author: "Tina B.", text: "Passed my AWS certification because of this!", verified: true}] },
    { id: 10, cat: "Cloud", title: "Google Cloud Fundamentals", platform: "Coursera", instructor: "Google Cloud", price: 0, rating: 4.6, dur: "1 Week", level: "Beginner", cert: "No", lang: "English", access: "3 Months", syllabus: "Basics", videos: "15 Videos", notes: "Qwiklabs Access", reviews: [{author: "Kabir M.", text: "Good intro, but very short.", verified: true}] },
    { id: 11, cat: "Cloud", title: "Web3 & Blockchain", platform: "Udemy", instructor: "Stephen Grider", price: 3200, rating: 4.7, dur: "25 Hours", level: "Advanced", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "In-depth", videos: "180 Lectures", notes: "Github Repo Access", reviews: [{author: "Simran K.", text: "Complex topics explained with ease. Smart contracts made simple.", verified: true}] },
    
    { id: 12, cat: "Cybersecurity", title: "Ethical Hacking Masterclass", platform: "Udemy", instructor: "Zaid Sabih", price: 3200, rating: 4.6, dur: "16 Hours", level: "Beginner", cert: "Yes", lang: "Hindi/English", access: "Lifetime", syllabus: "Practical", videos: "140 Lectures", notes: "Software Tools Provided", reviews: [{author: "Karan T.", text: "Live attacks and real-world examples were awesome.", verified: true}] },
    { id: 13, cat: "Cybersecurity", title: "InfoSec Foundations", platform: "Khan Academy", instructor: "KA Staff", price: 0, rating: 4.5, dur: "10 Hours", level: "Beginner", cert: "No", lang: "English", access: "Lifetime", syllabus: "Theory", videos: "25 Videos", notes: "Quizzes", reviews: [{author: "Pooja C.", text: "Basic definitions and networking fundamentals covered well.", verified: true}] },
    
    { id: 14, cat: "Design", title: "Google UX Professional", platform: "Coursera", instructor: "Google Team", price: 4500, rating: 4.8, dur: "6 Months", level: "Beginner", cert: "Yes", lang: "English", access: "6 Months", syllabus: "Professional", videos: "200+ Videos", notes: "Case Study Templates", reviews: [{author: "Manish H.", text: "Helped me build a solid UX portfolio.", verified: true}] },
    { id: 15, cat: "Design", title: "Figma UI Design", platform: "Skillshare", instructor: "Daniel Scott", price: 2100, rating: 4.7, dur: "15 Hours", level: "All Levels", cert: "No", lang: "English", access: "Subscription", syllabus: "Creative", videos: "60 High-Quality Videos", notes: "Design Assets", reviews: [{author: "Ritika N.", text: "Fun and engaging instructor!", verified: true}] },
    
    { id: 16, cat: "Marketing", title: "Digital Marketing 101", platform: "Google", instructor: "Google Experts", price: 0, rating: 4.8, dur: "40 Hours", level: "Beginner", cert: "Yes", lang: "Multiple", access: "Lifetime", syllabus: "Business Core", videos: "100+ Videos", notes: "Official PDF Guides", reviews: [{author: "Varun S.", text: "Google's own platform, highly authentic.", verified: true}] },
    { id: 17, cat: "Marketing", title: "SEO Masterclass", platform: "Udemy", instructor: "Phil Ebiner", price: 2500, rating: 4.4, dur: "15 Hours", level: "Intermediate", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Focused", videos: "85 Lectures", notes: "Checklists", reviews: [{author: "Anjali G.", text: "Got my website ranking higher after applying these techniques.", verified: true}] },

    { id: 18, cat: "Finance", title: "Financial Markets", platform: "Coursera", instructor: "Yale University", price: 3000, rating: 4.8, dur: "7 Weeks", level: "Beginner", cert: "Yes", lang: "English", access: "6 Months", syllabus: "Academic", videos: "70 Videos", notes: "University Notes", reviews: [{author: "Aditya P.", text: "Yale's professor is a legend. Changed my perspective on money.", verified: true}] },
    { id: 19, cat: "Finance", title: "Personal Finance", platform: "Khan Academy", instructor: "Sal Khan", price: 0, rating: 4.9, dur: "20 Hours", level: "Beginner", cert: "No", lang: "English", access: "Lifetime", syllabus: "Life Skills", videos: "40 Blackboard Videos", notes: "Exercise Sheets", reviews: [{author: "Megha W.", text: "Essential knowledge everyone should have.", verified: true}] },

    { id: 20, cat: "GATE", title: "GATE CS/IT 2026 Batch", platform: "Unacademy", instructor: "Top Educators", price: 25000, rating: 4.8, dur: "8 Months", level: "Advanced", cert: "No", lang: "Hindi/English", access: "1 Year", syllabus: "Strictly Syllabus", videos: "Live + 500 Recorded", notes: "Daily Practice Papers", reviews: [{author: "Rajesh K.", text: "Best mock tests and live doubt solving.", verified: true}] },
    { id: 21, cat: "GATE", title: "GATE Prep Foundation", platform: "Byju's", instructor: "Byju's Faculty", price: 18000, rating: 4.5, dur: "6 Months", level: "Intermediate", cert: "No", lang: "English", access: "1 Year", syllabus: "Foundation", videos: "Animated Lectures", notes: "Physical Books Provided", reviews: [{author: "Shreya F.", text: "Good animation visuals to clear core concepts.", verified: true}] },

    { id: 22, cat: "Core Engineering", title: "Thermodynamics", platform: "NPTEL", instructor: "IIT Kharagpur", price: 0, rating: 4.7, dur: "12 Weeks", level: "Intermediate", cert: "Yes (Exam)", lang: "English", access: "12 Weeks", syllabus: "Academic Core", videos: "60 Hourly Lectures", notes: "Full NPTEL Notes PDF", reviews: [{author: "Gaurav Y.", text: "Assignments are tough but totally worth it.", verified: true}] },
    { id: 23, cat: "Core Engineering", title: "AutoCAD 2D & 3D", platform: "Udemy", instructor: "Awais Shafique", price: 3100, rating: 4.6, dur: "18 Hours", level: "All Levels", cert: "Yes", lang: "English", access: "Lifetime", syllabus: "Software Centric", videos: "110 Lectures", notes: "Practice Dwg Files", reviews: [{author: "Farhan A.", text: "Practical drafting examples were very helpful.", verified: true}] }
];

let selected = [];
let isLoggedIn = false;
let currentUser = "";
let currentDisplayedCourses = [...courses]; 

let totalSavings = 0;
let totalEnrolled = 0;
let myEnrolledCourses = [];

function initChips() {
    const chipContainer = document.getElementById('filterChips');
    categoriesList.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `chip ${index === 0 ? 'active' : ''}`;
        btn.innerText = cat === 'All' ? 'All Courses' : cat;
        btn.onclick = () => filterByCategory(cat, btn);
        chipContainer.appendChild(btn);
    });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { if(container.contains(toast)) container.removeChild(toast); }, 3000);
}

function handleLogin() {
    const userInp = document.getElementById('userInp').value.trim();
    if(userInp.length < 3) return showToast("Please enter a valid name.", "error");
    
    isLoggedIn = true;
    currentUser = userInp;
    localStorage.setItem('courseSyncUser', currentUser);
    
    updateProfileView(currentUser);
    closeLoginModal();
    updateAuthUI();
    showToast(`Welcome back, ${currentUser}!`, "success");
}

function handleLogout() {
    isLoggedIn = false;
    currentUser = "";
    localStorage.removeItem('courseSyncUser');
    updateAuthUI();
    switchTab('home');
    showToast("Logged out successfully.", "info");
}

function updateAuthUI() {
    const authElements = document.querySelectorAll('.auth-only');
    const loginLi = document.getElementById('loginBtnLi');
    authElements.forEach(el => el.style.display = isLoggedIn ? 'block' : 'none');
    loginLi.style.display = isLoggedIn ? 'none' : 'block';
}

function updateProfileView(name) {
    const isSamay = name.toLowerCase() === 'samay' || name.toLowerCase() === 'samay gandhi';
    document.getElementById('profileAvatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=150&background=3b82f6&color=fff&font-size=0.33&bold=true`;
    document.getElementById('profileName').innerText = isSamay ? "Samay Samir Kumar Gandhi" : name.charAt(0).toUpperCase() + name.slice(1);
    
    if(isSamay) {
        document.getElementById('profileBio').innerHTML = `<i class="fas fa-university"></i> Government Engineering College, Modasa (Sem-6)`;
    } else {
        document.getElementById('profileBio').innerHTML = `<i class="fas fa-user-graduate"></i> Learner at Course Comparator`;
    }
    document.getElementById('statEnrolled').innerText = totalEnrolled;
    document.getElementById('statSaved').innerText = `₹${totalSavings}`;
    
    renderEnrolledList();
}

function renderEnrolledList() {
    const listContainer = document.getElementById('enrolledCoursesList');
    if (myEnrolledCourses.length === 0) {
        listContainer.innerHTML = '<p style="color:#94a3b8;">You have not enrolled in any courses yet.</p>';
        return;
    }
    
    listContainer.innerHTML = myEnrolledCourses.map(course => `
        <div class="enrolled-card">
            <div class="enrolled-card-info">
                <h4>${course.title}</h4>
                <p>Platform: ${course.platform}</p>
                <div class="enrolled-badge"><i class="fas fa-check"></i> Active</div>
            </div>
            <div>
                <button class="btn-outline" style="padding: 6px 12px; font-size:0.85rem;" onclick="openWriteReviewModal(${course.id})">
                    <i class="fas fa-star"></i> Rate/Review
                </button>
            </div>
        </div>
    `).join('');
}

window.onload = () => {
    initChips();
    renderCourses(currentDisplayedCourses);
    const savedUser = localStorage.getItem('courseSyncUser');
    if(savedUser) {
        isLoggedIn = true;
        currentUser = savedUser;
        updateProfileView(currentUser);
        updateAuthUI();
    }
}

function openLoginModal() { document.getElementById('loginModal').style.display = 'flex'; }
function closeLoginModal() { document.getElementById('loginModal').style.display = 'none'; }

function switchTab(id) {
    const sections = ['home', 'categories', 'profile', 'support'];
    sections.forEach(s => {
        const sectionEl = document.getElementById(`section-${s}`);
        if(sectionEl) sectionEl.style.display = (s === id) ? 'block' : 'none';
        const navItem = document.getElementById(`nav-${s}`);
        if(navItem) navItem.classList.toggle('active', s === id);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitSupport() {
    const name = document.getElementById('contactName').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const msg = document.getElementById('contactMessage').value.trim();
    if(name === "" || subject === "" || msg === "") return showToast("Please fill all the fields.", "error");
    showToast("Generating ticket...", "info");
    setTimeout(() => {
        showToast("Ticket Submitted! Our team will contact you shortly.", "success");
        document.getElementById('contactName').value = ""; document.getElementById('contactSubject').value = ""; document.getElementById('contactMessage').value = "";
        switchTab('home');
    }, 1500);
}

function jumpToCategory(cat) {
    switchTab('home');
    const chips = document.querySelectorAll('.chip');
    let targetChip = chips[0];
    chips.forEach(c => { if(c.innerText.includes(cat)) targetChip = c; });
    filterByCategory(cat, targetChip);
}

function filterByCategory(cat, btnElement) {
    if(btnElement) {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btnElement.classList.add('active');
    }
    document.getElementById('searchInput').value = ""; 
    document.getElementById('searchDropdown').style.display = 'none';
    currentDisplayedCourses = cat === 'All' ? courses : courses.filter(c => c.cat === cat);
    renderCourses(currentDisplayedCourses);
    document.getElementById('gridTitle').innerText = cat === 'All' ? "Trending Courses" : `${cat} Courses`;
    updateCompareBar();
}

const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (query.length < 1) return searchDropdown.style.display = 'none';
    const matches = courses.filter(c => c.title.toLowerCase().includes(query) || c.cat.toLowerCase().includes(query) || c.platform.toLowerCase().includes(query)).slice(0, 5); 
    if (matches.length > 0) {
        searchDropdown.innerHTML = '';
        matches.forEach(m => {
            const li = document.createElement('li');
            li.innerHTML = `${m.title} <span>${m.cat}</span>`;
            li.onclick = () => { setSearch(m.title); searchDropdown.style.display = 'none'; };
            searchDropdown.appendChild(li);
        });
        searchDropdown.style.display = 'block';
    } else { searchDropdown.style.display = 'none'; }
});

document.addEventListener('click', function(e) {
    if (e.target !== searchInput && e.target !== searchDropdown) searchDropdown.style.display = 'none';
});

function executeSearch() {
    searchDropdown.style.display = 'none';
    const query = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.chip:first-child').classList.add('active'); 
    currentDisplayedCourses = courses.filter(c => c.title.toLowerCase().includes(query) || c.platform.toLowerCase().includes(query) || c.cat.toLowerCase().includes(query) || (query === 'free' && c.price === 0));
    renderCourses(currentDisplayedCourses);
    document.getElementById('gridTitle').innerText = query ? `Search Results for "${query}"` : "Trending Courses";
}

function setSearch(term) { document.getElementById('searchInput').value = term; executeSearch(); }
function toggleSelection(course) {
    const idx = selected.findIndex(c => c.id === course.id);
    if (idx > -1) {
        selected.splice(idx, 1); showToast("Course removed from comparison.", "info");
    } else {
        if (selected.length >= 2) return showToast("You can only compare 2 courses at a time.", "error");
        if (selected.length === 1 && selected[0].cat !== course.cat) return showToast(`Mismatch! Please select from "${selected[0].cat}".`, "error");
        selected.push(course); showToast("Course added to comparison list!", "success");
        
        const activeChip = document.querySelector('.chip.active').innerText;
        if (selected.length === 1 && activeChip === 'All Courses') {
            showToast(`Auto-switched to ${course.cat} category.`, "info");
            const chips = document.querySelectorAll('.chip');
            let targetChip = chips[0];
            chips.forEach(c => { if(c.innerText.includes(course.cat)) targetChip = c; });
            filterByCategory(course.cat, targetChip);
            return; 
        }
    }
    renderCourses(currentDisplayedCourses);
    updateCompareBar();
}

function renderCourses(data) {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = '';
    
    if(data.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; font-size:1.2rem; padding: 3rem;">No courses found matching your criteria.</p>';
        return;
    }
    
    data.forEach((c, index) => {
        const isSel = selected.some(s => s.id === c.id);
        const card = document.createElement('div');
        card.className = `course-card ${isSel ? 'selected' : ''}`;
        card.style.animationDelay = `${index * 0.03}s`;
        card.onclick = () => toggleSelection(c);
        
        let priceHTML = c.price === 0 ? '<span class="price free-badge">FREE</span>' : `<span class="price">₹${c.price}</span>`;
        
        card.innerHTML = `
            <div class="card-header">
                <span class="platform-tag">${c.platform}</span>
                <span class="category-text">${c.cat}</span>
            </div>
            <h3>${c.title}</h3>
            <p class="instructor"><i class="fas fa-chalkboard-teacher"></i> ${c.instructor}</p>
            <div class="card-footer">
                <div class="price-rating-wrap">
                    ${priceHTML}
                    <span class="rating" onclick="openReviewsModal(${c.id}); event.stopPropagation();" title="Read Student Reviews">
                        <i class="fas fa-star"></i> ${c.rating} <span class="review-count">(${c.reviews.length} Reviews)</span>
                    </span>
                </div>
                <button class="btn-direct-enroll" onclick="openCheckout(${c.id}); event.stopPropagation();" title="Enroll Now without comparing">
                    <i class="fas fa-cart-plus"></i> Enroll
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    const btn = document.getElementById('btnRunCompare');
    const text = document.getElementById('barText');
    if (selected.length > 0) {
        bar.style.display = 'flex';
        btn.disabled = selected.length !== 2;
        if (selected.length === 1) {
            text.innerHTML = `Selected: <strong>${selected[0].title}</strong>. <br>Pick 1 more from <span style="text-decoration: underline;">${selected[0].cat}</span>.`;
            btn.innerHTML = 'Analysis Locked <i class="fas fa-lock"></i>';
        } else {
            text.innerHTML = `<strong>2/2 Selected.</strong><br> Ready to run analysis!`;
            btn.innerHTML = 'Run Deep Analysis <i class="fas fa-bolt"></i>';
        }
    } else { bar.style.display = 'none'; }
}

// 🌟 UPGRADED TABLE WITH VIDEO LECTURES & STUDY MATERIAL 🌟
function openCompareModal() {
    if(selected.length !== 2) return;
    const [c1, c2] = selected;
    const table = document.getElementById('compareTable');
    
    const priceWin = c1.price < c2.price ? 'c1' : (c2.price < c1.price ? 'c2' : 'tie');
    const rateWin = c1.rating > c2.rating ? 'c1' : (c2.rating > c1.rating ? 'c2' : 'tie');

    const dPrice1 = c1.price === 0 ? 0 : Math.floor(c1.price * 0.85);
    const dPrice2 = c2.price === 0 ? 0 : Math.floor(c2.price * 0.85);

    const priceHtml1 = c1.price === 0 ? 'FREE' : `<del style="color:#94a3b8; font-size:0.9rem;">₹${c1.price}</del> <br> <span style="color:#10b981; font-size:1.4rem;">₹${dPrice1}</span>`;
    const priceHtml2 = c2.price === 0 ? 'FREE' : `<del style="color:#94a3b8; font-size:0.9rem;">₹${c2.price}</del> <br> <span style="color:#10b981; font-size:1.4rem;">₹${dPrice2}</span>`;

    const topRev1 = c1.reviews.length > 0 ? c1.reviews[0].text : "No reviews yet.";
    const topRev2 = c2.reviews.length > 0 ? c2.reviews[0].text : "No reviews yet.";

    table.innerHTML = `
        <tr>
            <th>Feature</th>
            <td class="course-title-th"><i class="fas fa-laptop-code"></i> ${c1.title}</td>
            <td class="course-title-th"><div class="vs-badge-container"><span class="vs-badge">VS</span></div><i class="fas fa-laptop-code"></i> ${c2.title}</td>
        </tr>
        <tr><th><i class="fas fa-building"></i> Platform</th><td><strong>${c1.platform}</strong></td><td><strong>${c2.platform}</strong></td></tr>
        <tr><th><i class="fas fa-user-tie"></i> Instructor</th><td>${c1.instructor}</td><td>${c2.instructor}</td></tr>
        <tr><th><i class="fas fa-star"></i> Rating</th>
            <td class="${rateWin==='c1'?'winner':''}">${c1.rating} / 5.0 ${rateWin==='c1'?'<span class="win-badge"><i class="fas fa-trophy"></i> Highest</span>':''}</td>
            <td class="${rateWin==='c2'?'winner':''}">${c2.rating} / 5.0 ${rateWin==='c2'?'<span class="win-badge"><i class="fas fa-trophy"></i> Highest</span>':''}</td>
        </tr>
        <tr><th><i class="fas fa-clock"></i> Duration</th><td>${c1.dur}</td><td>${c2.dur}</td></tr>
        
        <tr><th><i class="fas fa-video"></i> Video Lectures</th><td>${c1.videos}</td><td>${c2.videos}</td></tr>
        <tr><th><i class="fas fa-file-pdf"></i> Study Material</th><td>${c1.notes}</td><td>${c2.notes}</td></tr>
        
        <tr><th><i class="fas fa-layer-group"></i> Level</th><td>${c1.level}</td><td>${c2.level}</td></tr>
        <tr><th><i class="fas fa-language"></i> Language</th><td>${c1.lang}</td><td>${c2.lang}</td></tr>
        <tr><th><i class="fas fa-key"></i> Course Access</th><td>${c1.access}</td><td>${c2.access}</td></tr>
        <tr><th><i class="fas fa-book"></i> Syllabus Type</th><td>${c1.syllabus}</td><td>${c2.syllabus}</td></tr>
        <tr><th><i class="fas fa-comments"></i> Top Review</th>
            <td><div class="review-text">"${topRev1}"</div></td>
            <td><div class="review-text">"${topRev2}"</div></td>
        </tr>
        <tr><th><i class="fas fa-tag"></i> Our Offer (15% OFF)</th>
            <td class="${priceWin==='c1'?'winner':''}">${priceHtml1}</td>
            <td class="${priceWin==='c2'?'winner':''}">${priceHtml2}</td>
        </tr>
        <tr><th>Action</th>
            <td><button class="btn-enroll" onclick="openCheckout(${c1.id})"><i class="fas fa-cart-plus"></i> Enroll Now</button></td>
            <td><button class="btn-enroll" onclick="openCheckout(${c2.id})"><i class="fas fa-cart-plus"></i> Enroll Now</button></td>
        </tr>
    `;
    document.getElementById('compareModal').style.display = 'flex';
}

function closeCompareModal() { 
    document.getElementById('compareModal').style.display = 'none'; 
    selected = []; renderCourses(currentDisplayedCourses); updateCompareBar();
    showToast("Comparison closed. Selection cleared.", "info");
}

// CHECKOUT SYSTEM
let currentCheckoutCourse = null;

function openCheckout(courseId) {
    if(!isLoggedIn) {
        showToast("Please login to enroll in courses.", "error");
        closeCompareModal(); openLoginModal();
        return;
    }
    currentCheckoutCourse = courses.find(c => c.id === courseId);
    if(myEnrolledCourses.some(c => c.id === courseId)) return showToast("You are already enrolled in this course!", "error");
    
    document.getElementById('checkoutCourseName').innerText = currentCheckoutCourse.title;
    document.getElementById('checkoutPlatform').innerText = `Provided by ${currentCheckoutCourse.platform}`;
    
    if(currentCheckoutCourse.price === 0) {
        document.getElementById('checkoutOriginal').innerText = "FREE"; document.getElementById('checkoutDiscount').innerText = "0"; document.getElementById('checkoutFinal').innerText = "FREE";
    } else {
        const discount = Math.floor(currentCheckoutCourse.price * 0.15);
        const finalPrice = currentCheckoutCourse.price - discount;
        document.getElementById('checkoutOriginal').innerText = `₹${currentCheckoutCourse.price}`; document.getElementById('checkoutDiscount').innerText = discount; document.getElementById('checkoutFinal').innerText = `₹${finalPrice}`;
    }
    document.getElementById('compareModal').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeCheckoutModal() { 
    document.getElementById('checkoutModal').style.display = 'none'; 
    selected = []; renderCourses(currentDisplayedCourses); updateCompareBar();
}

function processPayment() {
    showToast("Processing Secure Enrollment...", "info");
    setTimeout(() => {
        document.getElementById('checkoutModal').style.display = 'none';
        showToast(`Successfully enrolled in ${currentCheckoutCourse.title}!`, "success");
        myEnrolledCourses.push(currentCheckoutCourse);
        totalEnrolled += 1;
        if(currentCheckoutCourse.price > 0) totalSavings += Math.floor(currentCheckoutCourse.price * 0.15);
        if(isLoggedIn) updateProfileView(currentUser);
        selected = []; renderCourses(currentDisplayedCourses); updateCompareBar();
    }, 1500);
}

function openReviewsModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    document.getElementById('reviewCourseTitle').innerText = course.title;
    
    const listContainer = document.getElementById('reviewsListContainer');
    if(course.reviews.length === 0) {
        listContainer.innerHTML = `<p style="color:var(--text-gray);">No reviews yet for this course.</p>`;
    } else {
        listContainer.innerHTML = course.reviews.map(r => `
            <div class="review-box">
                <div class="review-header">
                    <span class="review-author"><i class="fas fa-user-circle"></i> ${r.author} 
                    ${r.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified Student</span>' : ''}
                    </span>
                    <span class="review-date">Recent</span>
                </div>
                <div class="review-text-content">"${r.text}"</div>
            </div>
        `).reverse().join(''); 
    }
    document.getElementById('reviewsModal').style.display = 'flex';
}

function closeReviewsModal() { document.getElementById('reviewsModal').style.display = 'none'; }

let courseToReviewId = null;

function openWriteReviewModal(courseId) {
    courseToReviewId = courseId;
    const course = courses.find(c => c.id === courseId);
    document.getElementById('writeReviewCourseName').innerText = course.title;
    document.getElementById('newReviewText').value = ""; 
    document.getElementById('writeReviewModal').style.display = 'flex';
}

function closeWriteReviewModal() { document.getElementById('writeReviewModal').style.display = 'none'; }

function submitNewReview() {
    const text = document.getElementById('newReviewText').value.trim();
    if(text.length < 5) return showToast("Review must be at least 5 characters.", "error");

    const course = courses.find(c => c.id === courseToReviewId);
    course.reviews.push({
        author: currentUser,
        text: text,
        verified: true
    });

    showToast("Authenticating and Submitting your review...", "info");
    
    setTimeout(() => {
        closeWriteReviewModal();
        showToast("Review published successfully! Earned +10 Contribution Points.", "success");
        renderCourses(currentDisplayedCourses);
    }, 1500);
}