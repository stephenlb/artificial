let session = "";
let uri     = "http://www.cleverbot.com/getreply?";

export default (request, response) => {
    const pubnub = require('pubnub');
    const xhr    = require('xhr');
    const vault  = require('vault');

    let message = request.params.message || "";

    return vault.get("cleverbot-key").then( key => {
        if (Math.random() > 0.95) session = "";
        return xhr.fetch( uri + [
            "key="   + key
        ,   "input=" + message
        ,   "cs="    + session
        ,   "cb_settings_tweak1=100"
        ,   "cb_settings_tweak2=100"
        ,   "ts=" + (+new Date())
        ].join('&') ).then( result => {
            let bot = null;
            try      { bot = JSON.parse(result.body)                }
            catch(e) { 
                session = "";
                bot = { output: "Bot Error.", cs : session };
            }
            const reply = { "response" : bot.output || '' };
            session = bot.cs;
            pubnub.publish({ channel : "chatbot" , message : reply || '' });
            return response.send(reply);
        } );
    } );
};
