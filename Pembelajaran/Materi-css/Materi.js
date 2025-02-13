// Common functionality for all lessons
document.addEventListener('DOMContentLoaded', function () {
    // Add back button
    const backButton = document.createElement('button');
    backButton.className = 'nav-button';
    backButton.style.marginTop = '1rem';
    backButton.textContent = 'Back to Home';

    const lessonContent = document.querySelector('.lesson-content');
    if (lessonContent) {
        lessonContent.appendChild(backButton);
    }

    // Add event listener to back button
    backButton.addEventListener('click', function () {
        window.location.href = '/pembelajaran/Materi-html/index.html';
    });

    // Add copy functionality to code blocks
    document.querySelectorAll('pre').forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.style.position = 'absolute';
        copyButton.style.right = '1rem';
        copyButton.style.top = '0.5rem';
        copyButton.style.padding = '0.25rem 0.5rem';
        copyButton.style.background = '#9A9B9E';
        copyButton.style.color = 'white';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '4px';
        copyButton.style.cursor = 'pointer';

        block.style.position = 'relative';
        block.appendChild(copyButton);

        copyButton.addEventListener('click', function () {
            navigator.clipboard.writeText(block.textContent)
                .then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                });
        });
    });
});