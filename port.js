let info = []

function submit() {
    let names = document.getElementById('name').value;
    let mail = document.getElementById('email').value;
    let messsge= document.getElementById('message').value;

    let input={
        sn:info.length+1,
        names:names,
        mail:mail,
        messsge:messsge
    }
    info.push(JSON.stringify(input));
}

function view() {
    for(i=0; i<info.length; i++){
        
    }
    
    
}
