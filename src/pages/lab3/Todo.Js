async function funck() {
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
.then((req)=>
    {
        return req.json();
})
.then( (bigbux)=>
    {
        Valutes = bigbux.Valute
        listval = document.getElementById("quests");
        for(var key in Valutes){
            Buck = document.createElement('p');
            denga = Valutes[key]
            Buck.innerHTML= denga.CharCode +": " + denga.Name + " стоит " + denga.Value + " рублей за " +  denga.Nominal + " единиц(у)"
            listval.appendChild(Buck)
        }
})  
.catch((err)=>{console.log(21)})
}
document.addEventListener("DOMContentLoaded", function() 
{
    funck();
});