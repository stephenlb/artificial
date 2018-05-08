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

    // Specials Enabled
    document.querySelector("body").addEventListener( "mousedown", ( event ) => {
        story.special = true;
        event.cancelBubble = true;
        event.preventDefault  && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        sounds.play( 'sounds/ding', 400 );
    } );

    window.story.event = ( phrase, callback ) => events[phrase] = callback;

})();
