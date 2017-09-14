
var winHeight = $(window).height();

var loadPercent = $("#loadPercent");
var loadNumber = $("#loadNumber");
var loadScreen = $("#loadScreen").css("min-height", winHeight);

var navBarDiv = $("#navBarDiv");
var logoDiv = $("#logoDiv");
var navLogo = $("#navLogo");

var landing = $("#landing").css("min-height", winHeight);

var artists = $("#artists");

var contact = $("#contact").css("height", winHeight);
var contactDiv = $("#contactDiv");
var contactFooter = $("#contactFooter");

//email validators
var emailValidation = '@';
var emailValidationTwo = '.';


//animates name placeholder
//on focus out, checks for input and returns to placeholder if no input
var nameInput = $("#nameInput").on("focusin", function() {

  $("#phName").addClass("phFocus");
}).on("focusout", function() {

  var nInputVal = nameInput.val();

  if ( nInputVal === undefined || nInputVal === '') {
    $("#phName").removeClass("phFocus");
    $("#nameValid").addClass("validDisplay");
  } else {
    $("#nameValid").removeClass("validDisplay");
  }
});

//animates email placeholder
var emailInput = $("#emailInput").on("focusin", function() {

  $("#phEmail").addClass("phFocus");
}).on("focusout", function() {

//email validation
  if ( emailInput.val() === undefined || emailInput.val() === '' ) {
    $("#phEmail").removeClass("phFocus");
    $("#emailValid").addClass("validDisplay");
  } else if ( !emailInput.val().includes(emailValidation) ) {
    $("#emailValid").addClass("validDisplay");
  } else if ( emailInput.val() != undefined || emailInput.val() != '' && emailInput.val().includes(emailValidation) && emailInput.val().includes(emailValidationTwo) ) {
      $("#emailValid").removeClass("validDisplay");
    }
  });

//animates message placeholder
var taInput = $("#taInput").on("focusin", function() {

  $("#phTA").addClass("phFocus");
}).on("focusout", function() {

  if (taInput.val() === undefined || taInput.val() === '') {
    $("#phTA").removeClass("phFocus");
  }
});

var scrollListen = $(window).scroll( function() {

  if ( $(document).scrollTop() > 50 ) {

    navBarDiv.css("background", "rgba(10,10,10,.4)");
    logoDiv.css("opacity", "0");
    navLogo.css("opacity", "1");
  }

  //contact scroll animations

  if ( $(window).scrollTop() >= ( contact.offset().top - 50 ) ) {

    contactDiv.css("margin-top", "0");
    contactFooter.css("right", "0");
    navBarDiv.css("background", "#2b2922");

  } else if ( $(window).scrollTop() <= ( contact.offset().top - 200 ) )  {

    contactDiv.css("margin-top", "200%");
    contactFooter.css("right", "-100%");
    navBarDiv.css("background", "rgba(10,10,10,.4)");

  }

  if ( $(document).scrollTop() < 50 ) {

    navBarDiv.css("background", "rgba(0,0,0,0)");
    logoDiv.css("opacity", "1");
    navLogo.css("opacity", "0");
  }
});

//load screen animation

$(executeLoad);

function executeLoad() {

  var countUp = setInterval( function() {

    var makeNumber = Number( loadNumber.text() );
    var addOne = makeNumber + 1;
    loadNumber.text( addOne );

    if ( Number( loadNumber.text() ) === 100 ) {

      clearInterval( countUp );
      loadPercent.fadeOut(300);
      landing.animate( { opacity: 1 }, 1000 );
      loadScreen.css("background", "rgba(0,0,0,0)");

      setTimeout( function() {

        loadScreen.css("display", "none");
      }, 1000);
    }

  }, 2);
}
