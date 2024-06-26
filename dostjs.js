function Sob(){
    let op = document.getElementById('description');
    let arrow1 = document.getElementById('arrow1');

    if(op.style.display === "none")
    {
            
        arrow1.innerHTML = '&and;';
        op.style.display = "block";
    
    }
    else
    {
        arrow1.innerHTML = '&or;';
        op.style.display = "none";
    }
}