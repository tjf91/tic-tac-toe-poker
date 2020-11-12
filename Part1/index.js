console.log("testing index.js script")

const gameArrX =[0,0,0,0,0,0,0,0,0,0]
const gameArrO =[0,0,0,0,0,0,0,0,0,0]
const winningStrings= ['012','345','678','036','147','258','048','246']
const winningArrs=[]
const combos = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]


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


 
let clicks= 9

function play (e){
   const square = document.getElementById(e)
   const hoverColor = document.querySelector('td:hover')
   hoverColor.style.backgroundColor='lightpink'
   console.log(hoverColor)
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
             break
          }
        if(countO===3){
            alert("OMG PLAYER O WINS")
            break
         }
         if(clicks ===0 ){
             alert("cat's game")
             clicks++
             break
         }
     }
     
 }

        square.addEventListener('click',play)
    }
 
     


