function dogLike(){
  var name = document.getElementById('name').value;
  
  var likeOrNo;
  /*TODO:
  Fixa så att den inte tolkar nummer som namn
  */
      if(typeof name === 'number')
        likeOrNo = "Dedär är ett nummber, inte ett namn, dummer!";
      if(name.length >= 8)
        likeOrNo = "Ja hundarna gillar dig!";
      else if(name.length < 8)
        likeOrNo = "Nej, dem giller dig inte för ditt namn är kort :(";
      else
        likeOrNo = "Ogilting input";

      document.getElementById('result').innerHTML = likeOrNo;
  } 
  


