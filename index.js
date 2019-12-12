require( "dotenv" ).config();

const fetch = require( "node-fetch" );
const web = require( "webwebweb" );

web.APIs[ "/hook" ] = ( qs, body ) => {
  console.log( JSON.parse( body ) );
  let data = JSON.parse( body );
  if( data.text === "!test" ) {
    fetch( process.env.INCOMING_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "channel": "town-square",
        "username": "Bestest Bot",
        "icon_url": "https://image.flaticon.com/icons/svg/405/405289.svg",
        "text": "Testing :tada:"
      })
    } );
  }
};

web.Run( 9898 );
