document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Function to create fade-in effect
    function createFadeInEffect(elementId) {
        var tween = gsap.from(elementId, { opacity: 0, duration: 1 });
        
        new ScrollMagic.Scene({
            triggerElement: elementId,
            triggerHook: 0.9,  // Trigger when the element is 90% visible
            reverse: false     // Only trigger once
        })
        .setTween(tween)
        .addTo(controller);
    }

    // Apply fade-in effect to sections
    createFadeInEffect("#header");
    createFadeInEffect("#slider");
    createFadeInEffect("#contents1");
    createFadeInEffect("#contents2");
    createFadeInEffect("#contents3");
    createFadeInEffect("#footer");
});