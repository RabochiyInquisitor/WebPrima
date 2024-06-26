function MyArrow()
{
	var header = document.getElementById('header')
	var arrow = document.getElementById('arrow');
	
	if(header.style.display === "none")
	{
		
		arrow.innerHTML = '&and;';
		header.style.display = "flex";

	}
	else
	{
		arrow.innerHTML = '&or;';
	    header.style.display = "none";
	}


}


 
	

