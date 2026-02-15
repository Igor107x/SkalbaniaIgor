const backgroundcolorbtn = document.getElementById("backgroundcolor-btn");

const auta = [["Toyota Supra MK4", "Legenda z silnikiem 2JZ", "1.png"],
["Nissan Skyline R34", "Ikona japońskiej inżynierii z napędem na cztery koła", "2.png"],
["Mazda RX-7", "Unikalny silnik rotacyjny Wankla", "3.png"],
["Honda NSX", "Japońskie Ferrari", "4.png"],
["Subaru Impreza WRX STI", "Król rajdowych tras z napędem 4x4 i bokserem pod maską", "5.png"],
["Mitsubishi Lancer Evolution", "Największy rywal Subaru", "6.png"],
["Mazda MX-5 Miata", "Najlepiej sprzedający się roadster świata, kwintesencja radości z jazdy", "7.png"],
["Toyota AE86", "Legenda driftu i dostaw tofu, znana jako Hachi-Roku z 'Initial D'", "8.png"],
["Nissan Silvia S15", "Król driftingu z precyzyjnym prowadzeniem i silnikiem SR20DET", "9.png"],
["Honda Civic Type R EK9", "Pierwszy Civic z emblematem Type R, mistrz wysokich obrotów VTEC", "10.png"],
["Lexus LFA", "Symfonia silnika V10 i pokaz możliwości technologicznych japońskich inżynierów", "11.png"],
["Mitsubishi 3000GT VR-4", "Naszpikowany technologią potwór z napędem na cztery koła i dwiema turbinami", "12.png"]];

const ciekawostki = ["Ayrton Senna, legendarny kierowca F1, brał czynny udział w testowaniu i dopracowywaniu prowadzenia Hondy NSX.",
    "Silnik rotacyjny w Mazdzie RX-7 nie posiada klasycznych tłoków – zamiast nich w środku wirują trójkątne rotory.",
    "Toyota AE86 stała się kultowa nie dzięki mocy, której miała mało, ale dzięki idealnemu rozkładowi masy i napędowi na tył.",
    "Nazwa 'VTEC' w Hondzie to skrót od Variable Valve Event and Lift Electronic Control – technologii zmieniającej fazy rozrządu.",
    "Subaru Impreza WRX STI zawdzięcza swój charakterystyczny bulgot nierównej długości kolektorom wydechowym.",
    "Lexus LFA był tak zaawansowany, że Toyota musiała stworzyć specjalną krosownicę z włókna węglowego, aby zbudować jego nadwozie.",
    "Cyfrowe liczniki w japońskich autach z lat 80. i 90. były inspirowane kokpitami myśliwców.",
    "Mitsubishi Lancer Evolution i Subaru Impreza toczyli tak zaciętą walkę w rajdach WRC, że powstało z tego jedno z największych rywalizacji w historii motoryzacji.",
    "Japonia to ojczyzna driftu, który narodził się na górskich drogach touge.", 
    "Silnik 2JZ w Toyocie Suprze był tak solidny, że wytrzymywał ogromne moce bez wymiany wnętrzności.", 
    "Nissan Skyline R34 zyskał przydomek 'Godzilla' po dominacji w wyścigach w Australii.", 
    "Honda NSX była pierwszym autem z nadwoziem w całości wykonanym z aluminium."];



let Ciemne = 0;

const auta1 = document.getElementById("auta");
const wyszukiwarka = document.getElementById("szukaj");
const Zaloguj1 = document.getElementById("login1");
const Imie = document.getElementById("login");
const Powitanie = document.getElementById("powitanie");
const ciekawostka1 = document.getElementById("ciekawostka");
const losowy = Math.floor(Math.random() * ciekawostki.length);
ciekawostka1.textContent = ciekawostki[losowy];

Zaloguj1.addEventListener("click", function() {
    const imie = Imie.value;

    if (imie === "") {
        alert("Proszę o prawidłowe wypełnienie formularza");
    } else {
        Powitanie.textContent = "Witaj " + imie + "!";
    }
})




function wyswietlAuta(lista) {
    auta1.innerHTML = "";
    lista.forEach(function(auto) {
        const karta = document.createElement("div");
        karta.className = "kartaa";

        const autoinfo = document.createElement("div");

        const tytul = document.createElement("h2");
        tytul.textContent = auto[0];

        const opis = document.createElement("p");
        opis.textContent = auto[1];

        const zdjecie = document.createElement("img");
        zdjecie.src = auto[2];
        zdjecie.className = 'autozdj';

        karta.appendChild(zdjecie);
        autoinfo.appendChild(tytul);
        autoinfo.appendChild(opis);
        karta.appendChild(autoinfo);
        auta1.appendChild(karta);
    })
}

wyszukiwarka.addEventListener("input", function() {
    const tekst = wyszukiwarka.value.toLowerCase();

    const filtrAuta = auta.filter(function(auto) {
        return auto[0].toLowerCase().includes(tekst);
    })
    wyswietlAuta(filtrAuta);
})

wyswietlAuta(auta);

backgroundcolorbtn.addEventListener("click", function() {
    document.body.classList.toggle("ciemny-motyw");
    const backgroundcolorbtnicon = document.getElementById('backgroundcolor-btn-icon');
    if(document.body.classList.contains("ciemny-motyw")){
        backgroundcolorbtnicon.src = 'moon.png';
    }
    else {
        backgroundcolorbtnicon.src = 'sun.png';
    }
});