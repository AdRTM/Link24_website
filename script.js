var clock = document.getElementById('clock');

    function set_time()
    {
        var data = new Date();

        if(data.getHours()<18 && data.getHours()>3)
        {
            clock.innerHTML = '<img src=https://img.icons8.com/?size=100&id=15352&format=png&color=000000>';
        }

        else
        {
            clock.innerHTML = '<img src="https://img.icons8.com/?size=100&id=NJx6Gbc4Ng7C&format=png&color=000000">';
        }

        
        if(data.getMinutes()<10)
        {
            clock.innerHTML += data.getHours() + ':' + '0' + data.getMinutes();
        }

        else
        {
            clock.innerHTML += data.getHours() + ':' + data.getMinutes();
        }
    }

    async function Kurs_NBP()
    {
        const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/A?format=json');
        const data = await response.json();
        const rates = data[0].rates; /*numer zbioru*/
        var li = document.querySelectorAll('.kursy_walut');

        var usd = rates.find(waluta=>waluta.code==="USD");
        var eur = rates.find(waluta=>waluta.code==="EUR");
        var chf = rates.find(waluta=>waluta.code==="CHF");
        var aud = rates.find(waluta=>waluta.code==="AUD");

        li[0].innerHTML += (usd.mid).toPrecision(3) + ' zł';
        li[1].innerHTML += (eur.mid).toPrecision(3) + ' zł';
        li[2].innerHTML += (chf.mid).toPrecision(3) + ' zł';
        li[3].innerHTML += (aud.mid).toPrecision(3) + ' zł';
    }

    Kurs_NBP();
    set_time();
    setInterval(set_time,10000);

/*JSON Connect */ 

function Kontakt()
{
    var main_block = document.getElementById('subpage_main_block');
    main_block.classList.add('kontakt');

    main_block.innerHTML = 
    `<div class='subpage_header'> <img src='https://img.icons8.com/?size=100&id=nnbkrcGxTSm8&format=png&color=000000'> <h1>Kontakt</h1> </div>`;
    main_block.innerHTML += 
    `<section class='subpage_section'> <div><img src='https://img.icons8.com/?size=100&id=jqlmkpF_dS-2&format=png&color=000000'> Autor : Adrian Madej - adrtm </div> <div><img src='https://img.icons8.com/?size=100&id=okvpqeYbG0xb&format=png&color=000000'> E-mail : <a href='mailto:adrianmadej1010@gmail.com'>adrianmadej1010@gmail.com</a></div> <div><img src='https://img.icons8.com/?size=100&id=2olGSGqpqGWD&format=png&color=000000'> Telefon : 531 994 905</div> <div><img src='https://img.icons8.com/?size=100&id=12599&format=png&color=000000'> GitHub : <a href='https://github.com/AdRTM/Link24_website'>https://github.com/AdRTM/Link24_website</a></div> </section>`;
}

function Info() 
{
        var main_block = document.getElementById('subpage_main_block');
        main_block.classList.add('info');

        main_block.innerHTML = 
        `<div class='subpage_header'> <img src='https://img.icons8.com/?size=100&id=BKCQPf8biWWs&format=png&color=000000'> <h1>INFO</h1> </div>`;
        main_block.innerHTML +=
        `<section class='subpage_section'><h1>O NAS</h1> 
        <img src='https://images.unsplash.com/photo-1584931423298-c576fda54bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <p>Link24 to portal informacyjny obejmujący wiadomości z całego świata.</p> <p>Naszą misją jest aby przekazywać wiadomości prawdziwe i rzetelne.</p> <p>Działamy codziennie i dostarczamy najnowsze oraz najważniejsze informacje ze świata.
        <p>W naszym serwisie znajdziesz informacje z zakresu : </p>
        <ul>
        <li>Polityki</li>
        <li>Ekonomii</li>
        <li>Biznesu</li>
        <li>Świata</li>
        <li>Technologii i nauki</li>
        </ul>`;
}


const params = new URLSearchParams(window.location.search);
if (params.has("info")) 
{
    Info();
}
else if (params.has("kontakt"))
{
    Kontakt();
}


          
    

    
