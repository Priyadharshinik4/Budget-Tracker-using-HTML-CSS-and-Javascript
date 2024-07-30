function add(){
    const type=document.getElementById("type").value;
    const name=document.getElementById("name").value;
    const amount=document.getElementById("amount").value;
    const data=document.getElementById("data");

    if(type===""){
        alert("Please select a type");
        return;
    }
    else if(name==="")
    {
        alert("Enter a name");
        return;
    }
    else if(amount===""){
        alert("Enter an amount");
        return;
    }

    const trow=document.createElement("tr");
    const ttype=document.createElement("td");
    const tname=document.createElement("td");
    const tamount=document.createElement("td");
    const toption=document.createElement("td");

    const deleteb=document.createElement("button");
    deleteb.textContent="Delete";

    deleteb.onclick=function() {
        trow.remove();
    };
    ttype.textContent = type;
    tname.textContent = name;
    tamount.textContent = amount;
    toption.appendChild(deleteb);
    trow.appendChild(ttype);
    trow.appendChild(tname);
    trow.appendChild(tamount);
    trow.appendChild(toption);
    data.appendChild(trow);

    return false;
    
}
