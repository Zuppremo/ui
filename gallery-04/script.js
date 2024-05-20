var firstImage = "https://images.unsplash.com/photo-1715645943394-af1c45668000?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var secondImage = "https://images.unsplash.com/photo-1616785485221-98d62609e3b0?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var thirdImage = "https://images.unsplash.com/photo-1653832920174-1f333e009b62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var fourthImage = "https://images.unsplash.com/photo-1510422617471-270adeeeaf64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var fifthImage = "https://images.unsplash.com/photo-1714419211863-cc38714afb1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var sixthImage = "https://images.unsplash.com/photo-1714722473709-4f1002b45c87?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var seventhImage = "https://images.unsplash.com/photo-1715505535741-e20f2ea6c573?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var eightImage = "https://images.unsplash.com/photo-1715356758153-6d58ae44e8fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var question = "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg";

const images = [firstImage, firstImage, secondImage, secondImage, thirdImage, thirdImage, fourthImage, fourthImage,
  fifthImage, fifthImage, sixthImage, sixthImage, seventhImage, seventhImage,
  eightImage, eightImage];
var shuffleImages = images.sort(() => (Math.random() > .5) ? 2: -1);

var inputBlocked = false;
for (let i = 0; i < images.length; i++) 
{
  let box = document.createElement('article');
  box.className = "card";

  let figure = document.createElement('figure');
  box.append(figure);

  let img = document.createElement('img');
  img.src = question;
  img.id = 'img_' + i;
  figure.append(img);
  var selectedIndex = -1;
  img.onclick = function()
  {
    if(inputBlocked)
      return;
    document.getElementById('img_'+i).src = images[i];
    if(selectedIndex >= 0)
    {
      if(images[i] == images[selectedIndex])
      {
        console.log("Las imagenes son iguales");
      }else{
        
        inputBlocked = true;
        setTimeout(closeImages, 2000, i, selectedIndex);
      }
      selectedIndex = -1;
    }else{
      selectedIndex = i;
    }
    console.log(selectedIndex);
  };
  document.querySelector('.gallery').appendChild(box);
} 

function closeImages(i, lastIndex)
{
   document.getElementById('img_' + i).src = question;   
   document.getElementById('img_' + lastIndex).src = question;
   inputBlocked = false;
}



function resetGame()
{
  window.location.reload(); 
}
