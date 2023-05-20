function changeclr(){
  var selectElement = document.getElementById('fontclr').value;

  var paragraph = document.getElementById('myParagraph');
  paragraph.style.color = selectElement ;
}


function changeFontSize() {
var selectElement = document.getElementById('fontSizeSelect');

var selectedValue = selectElement.value;
console.log(selectedValue)
var paragraph = document.getElementById('myParagraph');
paragraph.style.fontSize = selectedValue + 'px';
}


function changeFontBold() {
  var selectElement = document.getElementById('fontBoldSelect');
  
  var selectedValue = selectElement.value;
  
  var paragraph = document.getElementById('myParagraph');
  paragraph.style.fontWeight = selectedValue ;
  }

  function changeFontFamily() {
    var selectElement = document.getElementById('fontFamilySelect');
    
    var selectedValue = selectElement.value;
    
    var paragraph = document.getElementById('myParagraph');
    paragraph.style.fontFamily = selectedValue ;
    }

    function changetextShadow() {
      var selectElement = document.getElementById('textShadowSelect');
      
      var selectedValue = selectElement.value;
      
      var paragraph = document.getElementById('myParagraph');
      paragraph.style.textShadow = selectedValue ;
      }

      function changeStyleFamily() {
        var selectElement = document.getElementById('fontStyleSelect');
        
        var selectedValue = selectElement.value;
        
        var paragraph = document.getElementById('myParagraph');
        paragraph.style.fontStyle = selectedValue ;
        } 

        function changeStyleFamily() {
          var selectElement = document.getElementById('fontStyleSelect');
          
          var selectedValue = selectElement.value;
          
          var paragraph = document.getElementById('myParagraph');
          paragraph.style.fontStyle = selectedValue ;
          } 


      