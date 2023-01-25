window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(key)
    if (!audio) {return} // Stop the function from running further
    
    key.classList.add('playing');
    audio.currentTime = 0; // Resets previous play if the same key is hit quickly
    audio.play();
    key.classList.add('playing')

});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing')
}

keys = document.querySelectorAll('.key'); // A node list of all keys in the doc
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));