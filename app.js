function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML =
        h + ":" + m + ":" + s ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i)
{
    if (i < 10)
    {
        i = "0" + i    // add zero in front of numbers < 10
    }
    return i;
}
function BookHotel()
{
    name=document.getElementById("txtName").value;
    dName=document.getElementById("dName");
    dName.innerHTML=""+name;

    email=document.getElementById("txtEmail").value;
    dEmail=document.getElementById("dEmail");
    dEmail.innerHTML=""+email;

    mob=document.getElementById("txtMob").value;
    dMob=document.getElementById("dMob");
    dMob.innerHTML=""+mob;

    date=document.getElementById("date").value;
    dDate=document.getElementById("dDate");
    dDate.innerHTML=""+date;

    duration=document.getElementById("txtDuration").value;
    dDuration=document.getElementById("dDuration");
    dDuration.innerHTML=""+duration;

    deluxe=document.getElementById("optDeluxe");
    sDeluxe=document.getElementById("optSDeluxe");
    suite=document.getElementById("optSuite");
    locker=document.getElementById("optLocker");
    ac=document.getElementById("optAc");

    if(deluxe.checked)
    {
        cost=2500*duration;
        roomType=deluxe.value;
    }
    if(sDeluxe.checked)
    {
        cost=3300*duration;
        roomType=sDeluxe.value;
    }
    if(suite.checked)
    {
        cost=4000*duration;
        roomType=suite.value;
    }
    if(locker.checked)
    {
        lcost=200*duration;
        cost=cost+lcost;
    }
    if(locker.checked)
    {
        accost=500*duration;
        cost=cost+accost;
    }

    room=document.getElementById("rType");
    room.innerHTML=roomType;

    aminities1=locker.value;
    aminities2=ac.value;

    aminities=document.getElementById("dAminities");
    aminities.innerHTML=""+aminities1;

    total=document.getElementById("dTotal");
    total.innerHTML="&#8377; "+cost;

    advance=document.getElementById("txtAdvance").value;
    dAdvance=document.getElementById("dAdvance");
    dAdvance.innerHTML="&#8377; "+advance;

    due=cost-advance;

    balance=document.getElementById("dBalance");
    balance.innerHTML="&#8377; " +due;

    start = document.getElementById("start");
    start.style.display="none";

    confirmation=document.getElementById("confirmation");
    confirmation.style.display="block";
}

function CancelHotel()
{
    start.style.display="block";
    confirmation.style.display="none";
}
function ConfirmHotel() {
    window.print();
}