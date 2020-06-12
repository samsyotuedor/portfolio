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
    info.push(input);
}

function view() {
    let table = document.getElementById("pit");
    table.innerHTML= ' ';
    //let row = table.insertRow();
    for(i=0; i<info.length; i++){
        let row = table.insertRow();
        let snCell = row.insertCell();
        snCell.innerHTML = info[i].sn;
        let ncell = row.insertCell();
        ncell.innerHTML = info[i].names;
        let mcell = row.insertCell();
        mcell.innerHTML = info[i].mail;
        let mscell = row.insertCell();
        mscell.innerHTML = info[i].messsge;

    }
    
}
