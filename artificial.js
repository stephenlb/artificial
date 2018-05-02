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

    let context = new AudioContext();
    let stream  = null;
    let source  = null;

    requestMicrophone();

    function requestMicrophone() {
        navigator.mediaDevices.getUserMedia({ audio : true })
        .then( source => setSource(source) )
        .catch( error => console.error(error) );
    }

    function setSource(srcstrm) {
        stream = srcstrm;
        source = context.createMediaStreamSource(stream);

        console.log(stream);
        console.log(source);
    }
})();
