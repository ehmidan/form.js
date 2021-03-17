const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const M = document.getElementById('m')
const F = document.getElementById('F')
const form = document.getElementById('form')
function test(){
    
}

form.addEventListener('submit',(e)=>{
    event.preventDefault();
   
   
    if ( nom.value ==='' || nom.value==null){
        document.getElementById("erour1").innerHTML='first name is requard';
    }
   
    
    if ( prenom.value ==='' || prenom.value==null){
        document.getElementById("erour2").innerHTML='last name is requard';
        
    }
    const age = document.getElementById('age').value;
    if (age<18 || age>30){
        document.getElementById("erour3").innerHTML='Your age is not limited between 18 and 30';
     }
     

    if (age>=18 && age<=30 && nom.value != null &&  prenom.value !=null) {
        if(M.checked){
            document.getElementById("affichie").innerHTML='your name is '+nom.value +'  '+ prenom.value+"<br>" + ' your old is '+age +"<br>"+"you're Man";
            document.getElementById("nom").value='';
            document.getElementById("prenom").value='';
            document.getElementById("age").value='';
            document.getElementById("erour1").innerHTML='';
            document.getElementById("erour2").innerHTML='';
            document.getElementById("erour3").innerHTML='';
         
            
        }
        else
             
        document.getElementById("affichie").innerHTML='your name is '+nom.value +'  '+ prenom.value +"<br>"+' your old is <br>'+age +"you're Woman";
   
        document.getElementById("nom").value='';
        document.getElementById("prenom").value='';
        document.getElementById("age").value='';
        document.getElementById("erour1").innerHTML='';
        document.getElementById("erour2").innerHTML='';
        document.getElementById("erour3").innerHTML='';
     
     
    }

    
   
})
