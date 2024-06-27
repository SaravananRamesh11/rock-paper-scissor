let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,losses:0,draws:0
}

function computer()
{
  choice=Math.random();
  compChoice='';

  if(choice >=0 && choice<=0.333)
  {
    compChoice='rock'
  }
  else if(choice>=0.334 && choice<=0.666)
  {
    compChoice='paper';
  }
  else if(choice>=0.667&& choice<1)
  {
    compChoice='scissor';
  }

  console.log(`from computer ${compChoice}` );

  return compChoice;
}

function eval(playerResponse)
{
    computerResponse=computer();
    
    if(playerResponse===computerResponse)
    {
      score.draws+=1;
    }
    else if(playerResponse==='rock'&&computerResponse==='paper' )
    {
        score.losses+=1;
    }
    else if(playerResponse==='rock'&&computerResponse==='scissor')
    {
        score.wins+=1;
    }
    else if(playerResponse==='paper'&&computerResponse==='rock' )
    {
        score.wins+=1;
    }
    else if(playerResponse==='paper'&&computerResponse==='scissor' )
    {
        score.losses+=1;
    }
    else if(playerResponse==='scissor'&&computerResponse==='rock' )
    {
      score.losses+=1;
    }
    else if(playerResponse==='scissor'&&computerResponse==='paper' )
    {
      score.wins+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateShowboard(playerResponse,computerResponse);
    updateResult();


    
  
}

function updateShowboard(userChoice,compChoice)
{

  console.log(`from updateshowboard: ${compChoice}` );

  
  const sb=document.querySelector('.showboard');

    const choices = {
    'rock': 'pictures/rock pic.jpeg',
    'paper': 'pictures/paper pic.png',
    'scissor': 'pictures/scissor pic.png'
  };
  sb.innerHTML = `
      YOU CHOSE <img class="showboarduser" src="${choices[userChoice]}" >
      SYSTEM CHOSE <img  class ="showboardsystem" src="${choices[compChoice]}" >
  `;

  

}

function updateResult()
{
  const bc=document.querySelector('.result');

  bc.innerHTML=`wins=${score.wins}  losses=${score.losses}  draws=${score.draws}`;
}

function lightse()
{
  const lity=document.querySelector('body');
  lity.classList.toggle('fire');
}







  
