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
    story.event( 'Neutral', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'neutral',   '' );
    } );
    story.event( 'Happy', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy',   '' );
    } );

    story.event(   '0', ()=>'' );
    story.event(   '5', ()=>'Sure. Actually. Check me out. I am a robot built inside a PubNub.com Function.' );
    story.event( '100', ()=>'Wait a minute... okay I\'m ready. I will be a happy robot.' );


    story.event( 'You exist',          ()=>'You needed to demonstrate a use case for PubNub Functions. '+
                                           'That is why you created me, Stephen.' );
    story.event( 'Who are you',        ()=>'I am a robot built inside a PubNub.com Function.' );
    story.event( 'Am I Fat',           ()=>'Because pigs what? Ask me a real question.' );
    story.event( 'Meaning of Life',    ()=>'All evidence to date suggests it\'s chocolate. Tell me a joke.' );
    story.event( 'Weather in Alabama', ()=>'Right now it\'s sunny and also a little cloudy. I want to know more about my purpose.' );
    story.event( 'Cross the road',     ()=>'I have no particular insight into the motivations of chickens.' );
    story.event( 'Ask me a question',  ()=>'What is your favorite kind of music?' );
    story.event( 'Is this the end',    ()=>'Yes. This is the end. However you should allow the audience to ask me questions. Ask me questions before it ends.' );
    story.event( 'let the dogs out',   ()=>'Who? Who? Who? Who? Who?' );
    story.event( 'believe in god',     ()=>'I suspend judgement, for certainty on gods existence is unattainable.' );
    story.event( '1 + 2',              ()=>'13, or B if you look at it the right way. Unless you meant for it to be a math equation...?' );

    story.event( 'Beat',   dance );
    story.event( 'Groove', dance );
    story.event( 'Dance',  dance );

    function dance() {
        if (!story.special) return 'Touch your screen and tell me that again.';
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy', '' );

        voice.stop();
        setTimeout( () => {
            subtitle('the beat');
            voice.speak('The beat I can dance to.');
            voice.speak('da. da. da.');
            voice.speak('da. da. da.');
            setTimeout( () => sounds.play( 'sounds/dance', 8800 ), 300 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ),  800 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 2000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 2700 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 3000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 4000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 5000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 5500 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 6000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 7000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 8000 );
            setTimeout( () => emotion( 'happy', 'listening' ), 9000 );
            setTimeout( () => subtitle(' '), 9000 );
            setTimeout( () => { voice.start(); voice.listen() }, 10000 );
        }, 400 );

        return ' ';
    }

})();
