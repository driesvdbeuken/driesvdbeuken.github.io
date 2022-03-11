var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Programming')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Cyber Security')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Photography')
    .pauseFor(1500)
    .start();