// পেজ লোড হলে লোডার বন্ধ করা
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1200);
});

// মেনু আইকন ক্লিক ফাংশন (অপশনাল)
document.querySelector('.menu-bar').addEventListener('click', () => {
    alert('মেনু ওপেন হচ্ছে...');
});

// গ্যালারি দেখানোর ফাংশন
function showGallery() {
    document.getElementById('home-section').style.display = 'none';
    document.querySelector('.top-frames').style.display = 'flex';
    document.querySelector('.main-gallery').style.display = 'grid';
}

// হোমে ফিরে আসার ফাংশন
function showHome() {
    document.getElementById('home-section').style.display = 'flex';
    document.querySelector('.top-frames').style.display = 'none';
    document.querySelector('.main-gallery').style.display = 'none';
}
