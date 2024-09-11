const rezultati = document.getElementById('rezultati');

function shtoPerTuShfaqur(input){
    rezultati.value += input;
}

function kalkulo(){
    try{
    rezultati.value = eval(rezultati.value);
    }
    catch(error){
        rezultati.value = 'Gabim';
    }
}

function pastro(){
    rezultati.value = "";
}
