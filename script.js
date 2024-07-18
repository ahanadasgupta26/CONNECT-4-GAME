var blue='B';
var red='R';
var currp=red;

var gameover=false;
var board;

var rows=6;
var cols=7;
var currcols;

const func1=()=>{
    setg();
}

window.addEventListener("load",func1);

function setp()
{
    if(gameover)
    {
        return;
    }

    let coords=this.id.split("-");
    let r=parseInt(coords[0]);
    let c=parseInt(coords[1]);
    
    r=currcols[c];
    if(r<0)
    {
        return;
    }

    board[r][c]=currp;
    let tile=document.getElementById(r.toString()+"-"+c.toString());
    if(currp==red)
    {
        tile.classList.add("redp");
        currp=blue;
    }
    else
    {
         tile.classList.add("bluep");
         currp=red;
    }
    
    r-=1;
    currcols[c]=r;

    checkwinner();
}

const setg=()=>{
    board=[];
    currcols=[5,5,5,5,5,5,5]

    for(let r=0;r<rows;r++)
    {
        let row=[];
        for(let c=0;c<cols;c++)
        {
            row.push(" ");
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click",setp);
            document.querySelector("#board").append(tile);
        }
        board.push(row);
    }
}

function checkwinner()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<cols-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r][c+1] && board[r][c+1]==board[r][c+2] && board[r][c+2]==board[r][c+3])
                {
                        setwinner(r,c);
                        return;
                }
            }
        }
    }

    for(let c=0;c<cols;c++)
    {
        for(let r=0;r<rows-3;r++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r+1][c] && board[r+1][c]==board[r+2][c] && board[r+2][c]==board[r+3][c])
                    {
                            setwinner(r,c);
                            return;
                    }
            }
        }
    }
    
    for(let r=0;r<rows-3;r++)
    {
        for(let c=0;c<cols-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r+1][c+1] && board[r+1][c+1]==board[r+2][c+2] && board[r+2][c+2]==board[r+3][c+3])
                    {
                        setwinner(r,c);
                        return; 
                    }
            }
        }  
    }

    for(let r=3;r<rows;r++)
    {
        for(let c=0;c<cols-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r-1][c+1] && board[r-1][c+1]==board[r-2][c+2] && board[r-2][c+2]==board[r-3][c+3])
                    {
                        setwinner(r,c);
                        return; 
                    }
            }
        }
    }
}  


function setwinner(r,c)
{
      let winner=document.querySelector("#win");
      if(board[r][c]==red)
      {
        win.innerText="WINNER IS RED";
      }
      else
      {
        winner.innerText="WINNER IS BLUE";
      }
      gameover=true;
}