/* 
AJAX Examples
*/
//Retrieving an external resource (text file)
fetch( "https://alexwohlbruck.github.io/cat-facts/" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    if ( response.status >= 200 && response.status <= 299 )
    { // 200 range status/response codes are SUCCESSES!
      return response.json(); // Convert to JSON, and send to next step (.then())
    }
    else
    { // If it is another range, we are unsuccessful...
      throw Error( response.statusText ); // Display a formal error message reporting the concern.
    }
  } )
  // Data has been formatted, let's have a look inside...
  .then( data => {
    // Output data to console for testing.
    console.log( data );

    // Prepare for title-name******************FIRST SET OF DATA*********************
    const title = document.createElement( "h1" );
    title.textContent=`$(this.name)`;
    document.querySelector(".project-name").appendChild(title);
    // Let's grab the cat content
    const catContent = data.catContent; // This is a content about cats...
    { // Prepare a <p> for this feature********SECOND SET OF DATA*********************
        const contentElement = document.createElement( "p" );
        // Add some text content (using template literal to inject our values.)
        contentElement.textContent = `${list.name} is about ${feature.description}.`;
        // Add our <p> to the <section class="main-content"> so we can see it in the browser!
        document.querySelector(".main-content").appendChild(contentElement);
        /**I should also add title in <h2> so we can see in browser **/
    }
 
    // Prepare for HTML list.*********************THIRD SET OF DATA*******************************
    const listUL = document.createElement( "UL" );
    // Let's grab the features
    const feature = data.feature; // This is an array of features...
    // Let's loop through them!
    for ( const feature of list )
    { // Prepare an LI for this feature.
      const featureLI = document.createElement( "LI" );
      // Add some text content (using template literal to inject our values.)
      featureLI.textContent = `${list.name} can provide us with ${feature.description}.`;//incorrect
      // Add this <li> to our <ul>.
      listUL.appendChild( featureLI );
    }
    // Add our <ul> to the <body> so we can see it in the browser!
    document.body.appendChild( peopleUL );
  } ); 

