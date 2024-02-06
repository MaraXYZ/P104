var y = Math.floor(Math.random() * 10 * 1);

var x = document.getElementById("guessField").Value;

if(x==y)
{
    alert("¡¡¡FELICIDADES!!!"+playername+" LO ADIVINASTE BIEN"
    + guess + "intento");
    guess= 1;
    else
    {
        guess++;
        alert("¡OOPS LO SIENTO¡ INTENTA UN NUMERO MAS GRANDE")
    }
}     

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}