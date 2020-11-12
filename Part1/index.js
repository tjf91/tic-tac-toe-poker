console.log("testing index.js script")

let gameArrX =[0,0,0,0,0,0,0,0,0,0]
let gameArrO =[0,0,0,0,0,0,0,0,0,0]
const winningStrings= ['012','345','678','036','147','258','048','246']
const winningArrs=[]
const combos = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
let clicks= 9

function winningArrMaker(str,arr){
    str.split("").forEach(x=>{        
        arr[x]+=1
    })
    return arr
}

    winningStrings.forEach((str,i,arr)=>{
        winningArrMaker(str,combos[i])
    }
    )
    



console.log(combos)
//combos is an array of arrays containing all possible winning board combinations

 


function play (e){
    
   const square = document.getElementById(e)
   const hoverColor = document.querySelector('td:hover')
   hoverColor.style.backgroundColor='lightpink'
   let player = document.getElementById("player")
   square.innerText = player.innerText     
    if(player.innerText==="O"){
        player.innerText = "X"
        gameArrO[e]+=1        
        hoverColor.style.backgroundColor='lightpink'
        clicks -=1    
    }
    else if(player.innerText==="X"){
        gameArrX[e]+=1
        player.innerText = "O"
        console.log(gameArrX)
        hoverColor.style.backgroundColor='lightblue'
        clicks -=1 
    }  
       
    
    
    
    
   for(let i=0;i<8;i++){
     let countX = 0
     let countO = 0
      for(let j=0;j<9;j++){        
        if(combos[i][j]===1 &&gameArrX[j]===1){
             countX+=1
            }
        if(combos[i][j]===1 &&gameArrO[j]===1){
            countO+=1
         }
         if(countX===3){            
             alert("OMG PLAYER X WINS")             
             resetBut() 
             square.removeEventListener('click',play)
             newBut.addEventListener('click', reset)            
             break
          }
        if(countO===3){
            alert("OMG PLAYER O WINS")
            resetBut() 
             square.removeEventListener('click',play)
             newBut.addEventListener('click', reset)  
            break
            
         }
         if(clicks ===0 ){
             alert("cat's game")
             clicks++
             resetBut() 
             square.removeEventListener('click',play)
             newBut.addEventListener('click', reset)  
             break
             
         }
     }
     
 }
        
     square.addEventListener('click',play)
    }
 
        
    const table = document.getElementById('reset')

    const newBut = document.createElement('BUTTON')
    newBut.innerHTML = "Reset GAME"
    
    function reset(){
        const resetSquare = document.getElementsByTagName('td') 
        
        for(let i=0; i<9;i++){
            console.log(resetSquare[i])
            resetSquare[i].innerHTML=""
            resetSquare[i].style.backgroundColor='white'
            gameArrX =[0,0,0,0,0,0,0,0,0,0]   
            gameArrO =[0,0,0,0,0,0,0,0,0,0]
            clicks = [9]
        }
        
        

    }
    

    
    function resetBut() {
        table.appendChild(newBut)
                
    }
    
    
      
    

    
