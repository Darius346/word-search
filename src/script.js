let words = ['alive', 'dive', 'bae', 'brim', 'clue']

function OnClickButton()
{
  var wordFind = false;
  var input =   document.getElementById("answer").value;
  console.log(input);
  
  
  for (var i = 0; i < words.length; i <       i++)
    {
      if (input == words[i])
      {
        alert("hooray!");
        wordFind = true;
           
      }
  
    }
  if (wordFind == false)
    {
      alert("BOOOOO!");
    }
}