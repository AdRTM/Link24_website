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
        const rates = data[0].rates;
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
