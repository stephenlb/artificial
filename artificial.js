(()=>{
    'use strict';
    const orbiter = document.getElementById('artificial');
    let   mood    = orbiter.className;
    0&& setInterval( ()=>{
        if (orbiter.className.indexOf('talking') > -1) orbiter.className = mood;
        else                                           orbiter.className = mood + ' talking';
    }, 1000 );
})();
