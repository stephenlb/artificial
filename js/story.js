(()=>{
    'use strict';

    let count    = 0;
    const events = {};

    window.story = (ask) => {
        // Custom Responses to Questions
        for ( let phrase in events )
            if (ask.toLowerCase().indexOf(phrase.toLowerCase()) > -1)
                return (events[phrase]||(()=>{}))();

        // Force Story Events
        return (events[''+count++]||(()=>{}))();
    };

    window.story.event = ( phrase, callback ) => events[phrase] = callback;

})();
