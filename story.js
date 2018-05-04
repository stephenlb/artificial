(()=>{
    'use strict';

    let count = 0;
    const custom = {
        'Who are you' : 'I am a robot built inside a PubNub.com Function.'
    };

    window.story = (ask) => {
        // Custom Responses to Questions
        for ( let question in custom )
            if (ask.toLowerCase().indexOf(question.toLowerCase()) > -1)
                return custom[question];
        return ({
            //0 : "Wait a minute... okay I'm ready. I will be a happy robot."
        ,   5 : "Sure. Anyway. Check PubNub.com I was built there."
        })[''+count++];
    };

})();
