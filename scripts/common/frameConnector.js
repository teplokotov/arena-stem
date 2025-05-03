const iframe = document.getElementById('frame_1');

window.addEventListener('message', function(event) {
    // Checking the origin
    // if (event.origin !== 'https://another-domen.com') return;

    if (event.data.type === 'resize') {
        iframe.style.height = event.data.height + 'px';
    }
});

iframe.onload = function() {
    iframe.contentWindow.postMessage({ type: 'getHeight' }, '*');
};
