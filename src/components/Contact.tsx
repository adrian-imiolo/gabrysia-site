import { EmailForm } from "./EmailForm";
import { MapComponent } from "./Maps/MapComponent";
import LogoWhite from "./LogoWhite";

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h1>KONTAKT</h1>
      <div className="contact-container content-container">
        <div className="contact-info">
          <div className="contact-info-details">
            <LogoWhite />
            <h3>Kancelaria Adwokacka Adwokat Gabriela Urszulak</h3>
            <p>ul. Świebodzka 6 lok. 3, 50-046 Wrocław</p>
            <p>
              tel. <span>71 783 98 39</span>
            </p>
            <p>
              tel. kom. <span>+48 514 922 121</span>
            </p>
            <p>
              email: <span>kancelaria@adwokaturszulak.pl</span>
            </p>
            <p>
              NIP <span>8982299067</span>
            </p>
            <p>
              REGON <span>526686830</span>
            </p>
            <br />
          </div>
          <div className="contact-info-directions">
            <p>
              Kancelaria mieści się w ścisłym centrum Wrocławia, w bezpośrednim
              sąsiedztwie sądów, prokuratur, oraz Aresztu Śledczego.
            </p>
            <p>
              Kancelaria znajduje się na ul. Świebodzkiej – na tej samej ulicy,
              przy której mieści się Sąd Rejonowy dla Wrocławia-Fabrycznej we
              Wrocławiu oraz Areszt Śledczy.
            </p>
            <br />
            <p>
              Najbliższy przystanek tramwajowy oraz autobusowy znajduje się na
              Placu Legionów, dojazd liniami: 4, 5, 11, 14, 15, 21, 22, 23, 122,
              144, 246, 250, 251
            </p>
            <p>
              Na ul. Świebodzkiej oraz Placu Muzealnym znajdują się parkingi w
              ramach strefy płatnego parkowania oraz płatny parking przy
              Narodowym Forum Muzyki oraz w Galerii Renoma.
            </p>
            <br />
            <p>
              Wejście do Kancelarii znajduje się od strony podwórka, należy
              wejść wejściem po schodkach na lewo od wjazdu, a sama Kancelaria
              znajduje się na I piętrze.
            </p>
            <p>
              Na spotkania zapraszam od poniedziałku do piątku między 9 a 17,
              najlepiej po uprzednim telefonicznym uzgodnieniu terminu.
              Dostosuję się również do innych zaproponowanych terminów i godzin
              spotkań.
            </p>
          </div>
        </div>
        <div className="email-info">
          <EmailForm />
          <p>
            "Zgodnie z wymogami ogólnego rozporządzenia o ochronie danych
            osobowych (RODO), pragniemy poinformować, że: Administratorem
            Państwa danych osobowych jest "Kancelaria Adwokacka Adwokat Gabriela
            Urszulak" z siedzibą we Wrocławiu, ul. Świebodzka 6 lok. 3, 50-046
            Wrocław. Państwa dane osobowe będą przetwarzane w celu realizacji
            procesu ofertowania, zawarcia lub wykonywania umowy oraz w prawnie
            uzasadnionym interesie administratora, w celu utrzymania kontaktów
            biznesowych. Dane będą przechowywane przez okres niezbędny do
            prowadzenia korespondencji, a następnie w celach archiwizacyjnych,
            jednak nie dłużej niż rok. Przysługuje Państwu prawo do cofnięcia
            zgody, a podanie danych jest dobrowolne."
          </p>
        </div>
      </div>
      <MapComponent />
    </section>
  );
}
export default Contact;
