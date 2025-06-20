window.addEventListener('load', () => {
    const title = document.getElementById('title');
    const bismillah = document.getElementById('bismillah');
    const videoBox = document.getElementById('videoBox');

    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        bismillah.style.opacity = '1';
        bismillah.style.transform = 'translateY(0)';
g    }, 1500);

    setTimeout(() => {
        videoBox.style.opacity = '1';
        videoBox.style.transform = 'translateY(0)';
    }, 2500);
});