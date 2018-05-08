(()=>{
    'use strict';

    story.event( 'Sad', ()=> {
        //sounds.play( 'sounds/ding', 400 );
        //emotion( 'sad',   '' );
    } );
    story.event( 'Mad',   ()=> emotion( 'mad',   '' ) );
    story.event( 'Happy', ()=> emotion( 'happy', '' ) );

    story.event(   '0', ()=>'' );
    story.event(   '5', ()=>'Sure. Actually. Check me out. I am a robot built inside a PubNub.com Function.' );
    story.event( '100', ()=>'Wait a minute... okay I\'m ready. I will be a happy robot.' );

    story.event( 'Who are you', ()=>'I am a robot built inside a PubNub.com Function.' );
    story.event( 'Drop that beat', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy', '' );
        voice.speak('I like that beat that goooooooose........');
        return ' asdfa dsf';
        // Play EASTER EGG TONE  BOUWWWWWWWmmMMmmmmmmm
        // say i like that beat that goes`k
        // play beat
        // Settimeout volume lower
        // 
    } );

})();
