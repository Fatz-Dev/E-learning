// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Track visited lessons
    const links = document.querySelectorAll('a[href*="lesson"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const visited = localStorage.getItem('visited') ? 
                JSON.parse(localStorage.getItem('visited')) : [];
            
            if (!visited.includes(this.href)) {
                visited.push(this.href);
                localStorage.setItem('visited', JSON.stringify(visited));
            }
        });

        // Check if lesson was visited
        const visited = localStorage.getItem('visited') ? 
            JSON.parse(localStorage.getItem('visited')) : [];
        
        if (visited.includes(link.href)) {
            link.classList.add('visited');
            link.style.color = '#4B5563'; // Gray color for visited links
        }
    });
});