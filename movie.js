
/**
 * Change the text of a button
 * @param {el} object HTMLElement: button to change text of
 * @param {dText} string: default text
 * @param {nText} string: new text
 **/
function changeText(el, dText, nText) {
    var content = '',
        context = '';
   
    /**
     * Set the text of a button
     *     - dependant upon current text
     **/
    function setText() {
      return (content === dText) ? nText : dText;
    }
   
    /* Check to see if the browser accepts textContent */
    if ('textContent' in document.body) {
      context = 'textContent';
      /* Get the current button text */
      content = el[context];
    /* Browser does NOT use textContent */
    } else {
      /* Get the button text with fallback option */
      content = el.firstChild.nodeValue;
    }
   
    /* Set button text */
    if (context === 'textContent') {
      el.textContent = setText();
    } else {
      el.firstChild.nodeValue = setText();
    }
 }
 
 var defaultText,
      substituteText,
      btn;
 
 /* Default text of the button */
 defaultText = 'Favorite';
 /* Alternate text for button */
 substituteText = 'Un-Favorite';
 /* Grab our button */
 btn = document.querySelector('.btn');
 
 /* Add a listener to the button instance so we can manipulate it */
 btn.addEventListener('click', function() {
    changeText(this, defaultText, substituteText);
 }, false);


 var defaultText1,
      substituteText1,
      bt1;

 /* Default text of the button */
 defaultText1 = 'Add to cart';
 /* Alternate text for button */
 substituteText1 = 'Remove Add to cart';
 /* Grab our button */
 bt1 = document.querySelector('.bt1');

 /* Add a listener to the button instance so we can manipulate it */
 bt1.addEventListener('click', function() {
    changeText(this, defaultText1, substituteText1);
 }, false);


 // star


 const stars=document.querySelectorAll('.star');
 const current_rating=document.querySelector('.current-rating');

 stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{

      let current_star=index+1;
      current_rating.innerText=`${current_star} of 5`;

      stars.forEach((star,i)=> {
          if(current_star>=i+1){
            star.innerHTML='&#9733;';
          }
          else{
            star.innerHTML='&#9734;';
          }
      });

    });
 });
//
//This code provides a function called `changeText` that toggles the text of a button between two specified texts. It also includes a rating system for a product using stars. The function checks if the browser supports the `textContent` property and uses it if available. Otherwise, it uses the `nodeValue` property of the first child of the button element..</s>