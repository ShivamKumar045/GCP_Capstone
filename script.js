async function TimeAPI(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    var minutes = datetime.slice(14,16);
    
    console.log(hour);
    console.log(minutes)

    document.getElementById("hours").innerHTML=hour;
    document.getElementById("minutes").innerHTML=minutes;

}

   
 
