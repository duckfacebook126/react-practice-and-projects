
import { useState } from "react";
function Practice()
{

const [colors, setColor]=useState(
   ["red","blue","green","magenta"]);


function remove_color(event)
{

 
}

function add_color(event)
    {
    
     
    }





    return(<>
    
<div>

<ul>
{colors.map((color,index)=><li key={index}> {color}</li>)}
</ul>
    
    
    



</div>
    </>);
}
export default Practice