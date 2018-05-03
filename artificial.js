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
    let voice   = null;

    const voicesPromise = new Promise( resolve => {
        speechSynthesis.onvoiceschanged = _=> {
            resolve(speechSynthesis.getVoices());
        };
    } );

    requestMicrophone();

    function requestMicrophone() {
        navigator.mediaDevices.getUserMedia({ audio : true })
        .then( source => setSource(source) )
        .catch( error => console.error(error) );
    }


    function mono(stream) {
        const context  = new AudioContext();
	const splitter = context.createChannelSplitter(2);
	const merger   = context.createChannelMerger(2);

	stream.connect( splitter );

	splitter.connect( merger, 0, 0 );
	splitter.connect( merger, 0, 1 );

	return merger;
    }

    function setSource(srcstrm) {
        stream = srcstrm;
        //source = context.createMediaStreamSource(stream);
        voice  = context.createBuffer(
            1,
            context.sampleRate * 7,
            context.sampleRate
        );

        //mono(stream);

        //stream.connect(analyser);

        console.log(stream);
        console.log(source);

        speak( 'Hi.', 25);
    }

    window.speak = speak;
    function speak( text, voice=0 ) { voicesPromise.then(_=>{
        const speech = new SpeechSynthesisUtterance(text);
        speech.voice = speechSynthesis.getVoices()[voice];
        speechSynthesis.speak(speech);
    }) }

    function detectSilence(
        stream
    ,   onSoundEnd = _=>{}
    ,   onSoundStart = _=>{}
    ,   delay = 390
    ,   decibels = -32
    ) {
        const context  = new AudioContext();
        const analyser = context.createAnalyser();

        context.createMediaStreamSource(stream).connect(analyser);
        analyser.minDecibels = min_decibels;

        const data = new Uint8Array(analyser.frequencyBinCount);

        let start = 0;
        let triggered = false;

        checkSilence();

        function checkSilence(time) {
            requestAnimationFrame(checkSilence);
            analyser.getByteFrequencyData(data);

            // Is the volume loud enough to trigger onSoundStart
            if (data.some(v => v)) {
                if (triggered) {
                    triggered = false;
                    onSoundStart( stream, context, analyser );
                }
                start = time;
            }
            if (!triggered && time - start > delay) {
                onSoundEnd( stream, context, analyser );
                triggered = true;
            }
        }
    }


    function downsampleBuffer( buffer, sampleRate, outSampleRate ) {
	if (outSampleRate == sampleRate) return buffer;
	if (outSampleRate > sampleRate)  return buffer;

	const sampleRateRatio = sampleRate / outSampleRate;
	const newLength       = Math.round(buffer.length / sampleRateRatio);
	const result          = new Int16Array(newLength);
	const offsetResult    = 0;
	const offsetBuffer    = 0;

	while (offsetResult < result.length) {
	    let nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
	    let accum = 0, count = 0;
	    for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
		accum += buffer[i];
		count++;
	    }

	    result[offsetResult] = Math.min(1, accum / count)*0x7FFF;
	    offsetResult++;
	    offsetBuffer = nextOffsetBuffer;
	}

	return result.buffer;
    }

})();
