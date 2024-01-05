import gabraImg from "../assets/zdj_about.png"

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-box">
        <img src={gabraImg} alt="Picture of Gabriela Urszulak" />

        </div>
        <div className="about-box">
          <h3>KILKA SŁÓW O MNIE</h3>
          <h5>Jak zostałam adwokatem?</h5>
          <p>O byciu prawnikiem marzyłam od dziecka i konsekwentnie ten plan realizowałam. Dziś prowadzę indywidualną kancelarię
          adwokacką w centrum Wrocławia i realizuję dzięki temu dalszy etap zrodzonego ponad 20 lat temu
          marzenia - możliwość realnej pomocy innym.</p>
          <h5>Doświadczenie i umiejętności</h5>
              <p>W 2019 r. ukończyłam studia stacjonarne prawa na Wydziale Prawa, Administracji i Ekonomii
    Uniwersytetu Wrocławskiego. Obroniłam pracę magisterską pt. „Prywatność człowieka jako dobro
    osobiste”, napisaną pod kierunkiem prof. dr. hab. Piotra Machnikowskiego. W czasach studenckich
    byłam członkinią Uniwersyteckiej Poradni Prawnej oraz wyjechałam studiować prawo na
    Uniwersytecie w Salzburgu w ramach programu Erasmus +.
    Już w trakcie studiów chciałam mieć do czynienia z prawem w praktyce - w 2017 r. wyjechałam w
    tym celu na praktyki do Warszawy, a od 2018 r. podjęłam współpracę z Kancelariami Adwokackimi
    prowadzonymi przez doświadczonych adwokatów - mec. Joanną Palacz, mec. Michałem
    Młyńczakiem oraz mec. Mateuszem Cymą, z którymi współpracuję do dziś. Od 2020 r. jestem
    członkinią Izby Adwokackiej we Wrocławiu.</p>
          <h5>Jak pracuję?</h5>
          <p>W mojej pracy cenię sobie różnorodność i nieszablonowość. Zajmuję się sprawami z różnych dziedzin
prawa, co ważne, świadczę również pomoc prawną w języku angielskim, czego potwierdzeniem jest
uzyskany w 2019 r. certyfikat znajomości Legal English - Toles Higher. Obszar mojej praktyki to
szeroko rozumiane prawo cywilne oraz spory sądowe. Specjalizuję się również w prowadzeniu spraw
z zakresu prawa rodzinnego, w tym międzynarodowego prawa rodzinnego.
Jednakże, to co najważniejsze w mojej pracy, to pomoc jaką świadczę dla moich Klientów. Zdaję sobie
sprawę, że prawo jest skomplikowane, a wizyty w sądzie wiążą się z ogromnym stresem. Jestem po
to, aby te problemy rozwiązać, a moim Klientom zapewnić spokój. Uważam, że dla każdej dobrej
współpracy istotne są kwestie wzajemnego zaufania, jasnej komunikacji oraz określenia jej
warunków. Do każdej z powierzonych spraw przygotowuję się indywidualnie, gdyż nie ma dwóch
takich samych przypadków, a każdą z nich prowadzę z należytym zaangażowaniem.</p>
<h6>Zapraszam do współpracy!</h6>
        </div>
      </div>
    </section>
  )
}

export default About