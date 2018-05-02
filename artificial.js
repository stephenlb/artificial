(()=>{
    'use strict';
    const orbiter = document.getElementById('artificial');
    let   mood    = orbiter.className;
    let   ting    = ['', 'listening', 'talking'];
    let   pose    = 0;
    setInterval( ()=>{
        orbiter.className = mood + ting[pose++%3];
    }, 2000 );
})();

(()=>{
    'use strict';
    let stream = null;
    let source = null;

    requestMicrophone();

    function requestMicrophone() {
        let constraints = { audio : { sampleRate:11000, channelCount:1 } };
        navigator.mediaDevices.getUserMedia(constraints)
        .then( source => setSource(source) )
        .catch( error => console.error(error) );
    }

    function setSource(src) {
        stream = source;
        //source = audioCtx.createMediaStreamSource(stream);
    }
})();
