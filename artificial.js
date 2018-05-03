(()=>{
    'use strict';
    const orbiter = document.getElementById('artificial');
    let   mood    = orbiter.className;
    let   ting    = ['', 'listening', 'talking'];
    let   pose    = 0;
    setInterval( ()=> orbiter.className = mood + ' '+ ting[pose++%3], 2000 );
})();

(()=>{
    'use strict';

    voice.onInterim = (transcript) => {
        console.log( 'Interim:', transcript );
        // TODO display text on screen
    };

    // TODO this never fires.
    // TODO this never fires.
    // TODO this never fires.
    voice.onFinal = (transcript) => {
        console.log( 'Final:', transcript );
        // TODO send to Functions for bot response
        // TODO send to Functions for sentament
    };

    voice.onStart = () => { console.log('Started listening.') };
    // TODO uncomment
    //voice.onEnd   = () => { voice.listen() };
    // TODO uncomment
    //voice.onError = () => { voice.listen() };

    // TODO uncomment
    voice.listen();
    voice.speak('Hello.');

})();
