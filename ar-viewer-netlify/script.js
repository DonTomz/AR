window.onload = function() {
    // Get artwork URL from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const artworkUrl = urlParams.get('artwork');
    const size = parseFloat(urlParams.get('size')) || 1;

    if (!artworkUrl) {
        document.body.innerHTML = '<div style="padding: 20px; text-align: center;">No artwork URL provided</div>';
        return;
    }

    // Create AR scene
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false;');

    // Create marker
    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');

    // Create artwork
    const artwork = document.createElement('a-image');
    artwork.setAttribute('src', artworkUrl);
    artwork.setAttribute('width', size);
    artwork.setAttribute('height', size * (9/16));
    artwork.setAttribute('position', '0 0.1 0');
    artwork.setAttribute('rotation', '-90 0 0');

    // Create camera
    const camera = document.createElement('a-entity');
    camera.setAttribute('camera', '');

    // Assemble scene
    marker.appendChild(artwork);
    scene.appendChild(marker);
    scene.appendChild(camera);
    document.getElementById('ar-scene').appendChild(scene);
}; 