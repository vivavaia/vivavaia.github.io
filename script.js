document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.querySelector('.product-gallery--media-thumbnail[data-product-gallery-thumbnail="0"]');
    var btn2 = document.querySelector('.product-gallery--media-thumbnail[data-product-gallery-thumbnail="1"]');
    var viewport = document.querySelector('.product-gallery-viewport');

    btn1.addEventListener('click', function() {
        viewport.innerHTML = '<model-viewer id="mv-demo" shadow-intensity="1" src="box.glb" alt="A 3D model of a box" auto-rotate camera-controls></model-viewer>';
    });

    btn2.addEventListener('click', function() {
        viewport.innerHTML = '<img src="render-a3.jpg" alt="An image" style="width: 500px;" />';
    });
});