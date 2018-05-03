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
    const subkey      = 'sub-c-af8fe1f6-4f09-11e8-9b53-6e008aa3b186';
    const chatbot_url = 'https://pubsub.pubnub.com/v1/blocks/sub-key/'
                        + subkey + '/chatbot?message=';

    const chatbot = requester({
        success : chatbot_reply
    ,   fail    : chatbot_error
    });

    function chatbot_reply(result) {
        console.log('Success', result);
        voice.speak(result.response);
        voice.listen();
    }

    function chatbot_error(error) {
        console.log( 'Error: ', error );
        voice.listen();
    }

    voice.onInterim = (transcript) => {
        console.log( 'Interim:', transcript );
        // TODO display text on screen
    };

    voice.onFinal = (transcript) => {
        console.log( 'Final:', transcript );
        // TODO send to Functions for bot response
        // TODO send to Functions for sentament
        // TODO get result from subscribes.....
        chatbot({ url : chatbot_url + transcript });
    };

    voice.onStart = () => {
        console.log('Started listening.');
        // TODO update UI
    };
    voice.onEnd = () => { 
        console.log('End listening.');
        setTimeout( voice.listen, 1000 );
        // TODO only listen when speaking is done.
        // TODO only listen when speaking is done.
        // TODO only listen when speaking is done.
        // TODO update UI
    };
    voice.onError = () => { 
        console.log('Error listening.');
        //setTimeout( voice.listen, 300 );
    };

    // TODO uncomment
    voice.speak('Hi.');
    setTimeout( voice.listen, 1000 );

})();
