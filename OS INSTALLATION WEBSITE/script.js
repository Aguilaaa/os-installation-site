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
    });
}

// Mobile menu toggle (if needed in future)
const handleMobileMenu = () => {
    // Can be expanded for mobile hamburger menu if needed
};

// Video Modal functionality
function playVideo(videoId) {
    // If running from file:// protocol, open YouTube directly
    if (window.location.protocol === 'file:') {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        return;
    }
    
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    // Set YouTube embed URL with proper parameters
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&origin=${window.location.hostname || 'localhost'}&widgetid=1`;
    
    // Show modal
    modal.style.display = 'flex';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    // Stop video and hide modal
    iframe.src = '';
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('OS Installation Tutorials - Website Loaded');
    if (isFileProtocol) {
        console.log('Running from file:// - Videos will be clickable links');
    }
    
    // Video modal event listeners
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.video-modal-close');
    
    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }
    
    // Close modal when clicking outside video
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
});
