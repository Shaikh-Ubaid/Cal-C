var pressed=document.querySelectorAll('.numpad ul li');
var Screen=document.querySelector('.screen h1 input');
var equal=document.querySelector('.equals');
var signPressed=document.querySelectorAll('.signs ul li');
var funct=document.querySelectorAll('.func ul li');
var h=document.querySelector('.screen h2');
var firstTerm;
var clearScreen;
// var operation;
for(var i=0;i<pressed.length;i++)
{
	pressed[i].addEventListener('click',function(){
	if(clearScreen)
	{
		Screen.value='';
		clearScreen=false;
	}
	Screen.value+=this.innerHTML;
	if(h.innerHTML==='s' || h.innerHTML==='c' || h.innerHTML==='t' || h.innerHTML==='ln')
	{
		var a=0;
	}
	else
	{
		document.querySelector('.screen h2').innerHTML='';
	}
	
});
}
for(var i=0;i<funct.length;i++)
{
	funct[i].addEventListener('click', function(){
		Screen.value='';
		operation=this.innerHTML;
		document.querySelector('.screen h2').innerHTML=operation;

	})
}
for(var i=0;i<signPressed.length;i++)
{
	signPressed[i].addEventListener('click',function(){
	firstTerm=Number(Screen.value);
	if(h.innerHTML==='s' || h.innerHTML==='c' || h.innerHTML==='t' || h.innerHTML==='ln')
	{
		operation=this.innerHTML;
		Screen.value='';
	}
	else
	{
		operation=this.innerHTML;
		Screen.value='';
		document.querySelector('.screen h2').innerHTML=operation;
	}
	

});
}
equal.addEventListener('click', function(){

	if(h.innerHTML==='s' || h.innerHTML==='c' || h.innerHTML==='t' || h.innerHTML==='ln')
	{
		var intermediate;

		switch(operation) 
		{
			
		  case '+': intermediate=roundNumber(Number(Screen.value)+firstTerm,9);
		    	break;
		  case '-': intermediate=roundNumber(firstTerm-Number(Screen.value),9);
		  		break;
		  case '*': intermediate=roundNumber(Number(Screen.value)*firstTerm,9);
		    	break;
		  case '/': intermediate=roundNumber(firstTerm/Number(Screen.value),9);
		    	break;
		   case 's': Screen.value=roundNumber(Math.sin(Number(Screen.value)),9); intermediate=0;
		    	break;
		  case 'c': Screen.value=roundNumber(Math.cos(Number(Screen.value)),9); intermediate=0;
		    	break;
		  case 't': Screen.value=roundNumber(Math.tan(Number(Screen.value)),9); intermediate=0;
		    	break;
		  case 'ln': Screen.value=roundNumber(Math.log(Number(Screen.value)),9); intermediate=0;
		    	break;
		}
		if(intermediate)
		switch(h.innerHTML)
		{
			case 's': Screen.value=roundNumber(Math.sin(Number(intermediate)),9);
		    	break;
		  case 'c': Screen.value=roundNumber(Math.cos(Number(intermediate)),9);
		    	break;
		  case 't': Screen.value=roundNumber(Math.tan(Number(intermediate)),9);
		    	break;
		  case 'ln': Screen.value=roundNumber(Math.log(Number(intermediate)),9);
		    	break;
		}
	}
	else
	{
		switch(operation) 
		{
			
		  case '+': Screen.value=roundNumber(Number(Screen.value)+firstTerm,9);
		    	break;
		  case '-': Screen.value=roundNumber(firstTerm-Number(Screen.value),9);
		  		break;
		  case '*': Screen.value=roundNumber(Number(Screen.value)*firstTerm,9);
		    	break;
		  case '/': Screen.value=roundNumber(firstTerm/Number(Screen.value),9);
		    	break;
		  case 's': Screen.value=roundNumber(Math.sin(Number(Screen.value)),9);
		    	break;
		  case 'c': Screen.value=roundNumber(Math.cos(Number(Screen.value)),9);
		    	break;
		  case 't': Screen.value=roundNumber(Math.tan(Number(Screen.value)),9);
		    	break;
		  case 'ln': Screen.value=roundNumber(Math.log(Number(Screen.value)),9);
		    	break;
		  case 'p': Screen.value=roundNumber(Math.pow(firstTerm,Number(Screen.value)),9);
		    	break;
		}

	}

	document.querySelector('.screen h2').innerHTML='=';


	clearScreen=true;
})
function isNumberKey(txt, evt) 
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    switch(charCode)
	{
		case 43: signPressed[0].click(); break;
		case 45: signPressed[1].click(); break;
		case 42: signPressed[2].click(); break;
		case 47: signPressed[3].click(); break;
		case 13: equal.click(); break;
	}
    if (charCode === 46) {
        //Check if the text already contains the . character
        if (txt.value.indexOf('.') === -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (charCode > 31
             && (charCode < 48 || charCode > 57))
            return false;
    }
    return true;
}
document.querySelector('.AC').addEventListener('click',function(){
	Screen.value='';
	document.querySelector('.screen h2').innerHTML='';

})
document.querySelector('.clear').addEventListener('click',function(){
	Screen.value=Screen.value.substring(0,Screen.value.length-1);
})
document.querySelector('.power').addEventListener('click',function(){
	h.innerHTML='p';
	operation=h.innerHTML;
	firstTerm=Number(Screen.value);
	Screen.value='';
})

document.querySelector('.change').addEventListener('click',function(){
	if(Screen.value.search('-')===-1)
	{
		Screen.value='-'+Screen.value;
	}
	else
	{
		Screen.value=Screen.value.substring(1,Screen.value.length);
	}
})
document.querySelector('.pie').addEventListener('click',function(){
	if(Number(Screen.value)===0)
	{
		Screen.value+=roundNumber(Math.PI,9);
	}
	else
	{
		Screen.value=roundNumber(Number(Screen.value)*Math.PI,9);
	}
})
function roundNumber(num, scale) 
{
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}