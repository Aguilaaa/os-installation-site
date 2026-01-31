// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Check if running from file:// protocol
const isFileProtocol = window.location.protocol === 'file:';

// Convert iframe embeds to clickable video links if using file://
if (isFileProtocol) {
    document.addEventListener('DOMContentLoaded', () => {
        const iframes = document.querySelectorAll('.video-wrapper iframe');
        iframes.forEach(iframe => {
            const src = iframe.src;
            // Extract video ID from YouTube embed URL
            const match = src.match(/embed\/([a-zA-Z0-9_-]+)/);
            if (match) {
                const videoId = match[1];
                const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
                
                // Create clickable video link
                const videoLink = document.createElement('a');
                videoLink.href = youtubeUrl;
                videoLink.target = '_blank';
                videoLink.rel = 'noopener noreferrer';
                videoLink.className = 'video-link';
                videoLink.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`;
                videoLink.innerHTML = `
                    <div class="video-link-overlay">
                        <div class="video-play-button"></div>
                    </div>
                    <div class="video-watch-text">Click to watch on YouTube</div>
                `;
                
                // Replace iframe with clickable link
                iframe.parentElement.replaceChild(videoLink, iframe);
            }
        });
        
        // Show notice about server
        const notice = document.createElement('div');
        notice.style.cssText = 'position: fixed; top: 10px; right: 10px; background: #ff9800; color: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 10000; max-width: 300px;';
        notice.innerHTML = `
            <strong>💡 Tip:</strong><br>
            For embedded videos, use the server:<br>
            <small>Double-click "OPEN WEBSITE.bat"</small>
        `;
        document.body.appendChild(notice);
        
        // Auto-hide notice after 10 seconds
        setTimeout(() => {
            notice.style.transition = 'opacity 0.5s';
            notice.style.opacity = '0';
            setTimeout(() => notice.remove(), 500);
        }, 10000);
    });
}

// Mobile menu toggle (if needed in future)
const handleMobileMenu = () => {
    // Can be expanded for mobile hamburger menu if needed
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('OS Installation Tutorials - Website Loaded');
    if (isFileProtocol) {
        console.log('Running from file:// - Videos will be clickable links');
    }
});
