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