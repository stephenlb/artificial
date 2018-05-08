(()=>{
    'use strict';

    story.event( 'Sad', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'sad',   '' );
    } );
    story.event( 'Mad', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'mad',   '' );
    } );
    story.event( 'Happy', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy',   '' );
    } );

    story.event(   '0', ()=>'' );
    story.event(   '5', ()=>'Sure. Actually. Check me out. I am a robot built inside a PubNub.com Function.' );
    story.event( '100', ()=>'Wait a minute... okay I\'m ready. I will be a happy robot.' );

    story.event( 'Who are you', ()=>'I am a robot built inside a PubNub.com Function.' );
    story.event( 'beat',   dance );
    story.event( 'groove', dance );
    story.event( 'dance',  dance );

    function dance() {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy', '' );

        setTimeout( () => {
            voice.stop();
            subtitle('the beat');
            voice.speak('The beat I can dance.');
            voice.speak('da. da. da.');voice.speak('da. da. da.');
            voice.speak('dabbbb!');voice.speak('da. da. daa!');
            voice.speak('da. da. da!');
            setTimeout( () => emotion( 'dance dance-1', 'talking' ),  800 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 2000 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 3000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 4000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 5000 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 6000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 7000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 8000 );
            setTimeout( () => emotion( 'happy', 'listening' ), 9000 );
            setTimeout( () => subtitle(' '), 9000 );
            setTimeout( () => sounds.play( 'sounds/dance', 9000 ), 800 );
            //setTimeout( voice.listen, 19800 );
        }, 400 );

        return ' ';
    }

})();
