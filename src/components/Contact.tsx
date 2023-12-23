import { EmailForm } from "./EmailForm"

function Contact() {
  return (
    <section className="contact">
            <h1>KONTAKT</h1>
        <div className="contact-container">
            <div className="contact-info">
            <h3>Kancelaria Adwokacka Adwokat Gabriela Urszulak</h3>
            <p>ul. Świebodzka 6 lok. 3, 50-046 Wrocław</p>
            <p>tel. 71 783 98 39</p>
            <p>tel. kom. +48 514 922 121</p>
            <p>kancelaria@adwokaturszulak.pl</p>
            <p>NIP 8982299067</p>
            <p>REGON 526686830</p>
            <br />

            <p>Kancelaria mieści się w ścisłym centrum Wrocławia, w bezpośrednim sąsiedztwie sądów, prokuratur,
oraz Aresztu Śledczego.</p>
            <p>
            Kancelaria znajduje się na ul. Świebodzkiej – na tej samej ulicy, przy której mieści się Sąd Rejonowy
dla Wrocławia-Fabrycznej we Wrocławiu oraz Areszt Śledczy.
            </p>
            <p>
            Najbliższy przystanek tramwajowy oraz autobusowy znajduje się na Placu Legionów, dojazd liniami:
4, 5, 11, 14, 15, 21, 22, 23, 122, 144, 246, 250, 251
            </p>
            <p>Na ul. Świebodzkiej oraz Placu Muzealnym znajdują się parkingi w ramach strefy płatnego
parkowania oraz płatny parking przy Narodowym Forum Muzyki oraz w Galerii Renoma.</p>
<p>Wejście do Kancelarii znajduje się od strony podwórka, należy wejść wejściem po schodkach na lewo
od wjazdu, a sama Kancelaria znajduje się na I piętrze.</p>
<p>
Na spotkania zapraszam od poniedziałku do piątku między 9 a 17, najlepiej po uprzednim
telefonicznym uzgodnieniu terminu. Dostosuję się również do innych zaproponowanych terminów i
godzin spotkań.
</p>
            </div>
            <div className="email-info">
              <EmailForm />

            </div>
        </div>
    </section>
  )
}
export default Contact