import prawoKarne from "../assets/servicesImg/prawo-karne.png";
import prawoCywilne from "../assets/servicesImg/prawo-cywilne.png";
import prawoRodzinne from "../assets/servicesImg/prawo-rodzinne.png";
import prawoPracy from "../assets/servicesImg/prawo-pracy.png";
import prawoGospodarcze from "../assets/servicesImg/prawo-gospodarcze.png";
import prawoAdministracyjne from "../assets/servicesImg/prawo-administracyjne.png";
import administracyjne from "../assets/prawo/administracyjne.jpg";
import cywilne from "../assets/prawo/cywilne.jpg";
import gospodarcze from "../assets/prawo/gospodarcze.jpg";
import karne from "../assets/prawo/karne.jpg";
import pracy from "../assets/prawo/pracy.jpg";
import rodzinne from "../assets/prawo/rodzinne.jpg";

export const servicesData = [
  {
    id: 1,

    path: "prawo-cywilne",
    name: "Prawo cywilne",
    img: prawoCywilne,
    serviceImg: cywilne,
    title: `Jednym z głównych obszarów moich zainteresowań oraz praktyki prawniczej jest szeroko
    rozumiane prawo cywilne. Prowadzę spory sądowe, ale także zajmuję się bieżącym doradztwem.`,
    content: `Prowadzę spory sądowe, ale także zajmuję się bieżącym doradztwem,
    polegającym na sporządzaniu opinii prawnych czy przygotowywaniu umów. W szczególności są to sprawy:
    &bull; o zapłatę
    &bull; o wykonanie umów oraz sprawy związane z nienależytym ich wykonaniem
    &bull; konsumenckie
    &bull; o odszkodowanie i zadośćuczynienie, w tym również sprawy dotyczące wypadków
komunikacyjnych
&bull; o ochronę dóbr osobistych
&bull; spadkowe (stwierdzenie nabycia spadku, dział spadku, zachowek, ważność testamentu)
&bull; o ochronę prawa własności
&bull; z zakresu współwłasności, w tym jej zniesienia
&bull; dotyczące kwestii zasiedzenia`,
  },
  {
    id: 2,
    path: "prawo-karne",
    name: "Prawo karne",
    img: prawoKarne,
    serviceImg: karne,
    title: `Posiadam również doświadczenie w prowadzeniu spraw wykroczeniowych oraz karnych w
        każdym stadium postępowania, tj na etapie postępowania przygotowawczego, sądowego oraz
        wykonawczego.`,
    content: `W szczególności zajmuję się:
        &bull; obroną podejrzanego na etapie postępowania przygotowawczego (zatrzymanie, przedstawienie
        zarzutów, tymczasowe aresztowanie oraz pozostałe środki zapobiegawcze, branie udziału w
        czynnościach prowadzonych w toku dochodzenia lub śledztwa, składanie wniosków dowodowych)
        &bull; obroną oskarżonego na dalszym etapie postępowania
        &bull; obroną skazanego na etapie postępowania wykonawczego (sprawy dotyczące wstrzymania i
        odroczenia wykonania kary, przerwy w wykonaniu kary, warunkowe przedterminowe zwolnienie z
        odbycia reszty kary, o odbywanie kary w systemie dozoru elektronicznego)
        &bull; sprawami o wydanie wyroku łącznego
        &bull; reprezentacją pokrzywdzonych (oskarżycieli)`,
  },
  {
    id: 3,
    path: "prawo-rodzinne",
    name: "Prawo rodzinne",
    img: prawoRodzinne,
    serviceImg: rodzinne,
    title: `Kolejnym, jednym z głównych obszarów mojej praktyki są sprawy z zakresu prawa rodzinnego.
        Prowadzę również sprawy dotyczące międzynarodowego prawa rodzinnego i udzielam porad
        prawnych w tym zakresie obcokrajowcom.`,
    content: `W szczególności są to następujące sprawy:
        &bull; rozwód i separacja
        &bull; podział majątku wspólnego małżonków
        &bull; ustanowienie rozdzielności majątkowej małżeńskiej
        &bull; władza rodzicielska (ograniczenie, pozbawienie, zawieszenie i przywrócenie)
        &bull; zastępcza zgoda sądu opiekuńczego
        &bull; alimentacja (ustalenie, uchylenie, obniżenie, podwyższenie)
        &bull; kontakty z dzieckiem (ustalenie, zmiana, zakazanie)
        &bull; ustalenie i zaprzeczenie pochodzenia dziecka`,
  },
  {
    id: 4,
    path: "prawo-pracy",
    name: "Prawo pracy",
    img: prawoPracy,
    serviceImg: pracy,
    title: `Prowadzę również sprawy z zakresu prawa pracy, na etapie przedsądowym i sądowym, świadcząc
        pomoc prawną zarówno pracownikom, jak i pracodawcom.`,
    content: `W szczególności są to następujące sprawy:

        &bull; o zapłatę zaległego wynagrodzenia i ekwiwalentu za niewykorzystany urlop
        &bull; o przywrócenie do pracy
        &bull; o uznanie wypowiedzenia za bezskuteczne i zapłatę odszkodowania
        &bull; o sprostowanie świadectwa pracy
        &bull; o ustalenie wypadku przy pracy
        &bull; mobbing`,
  },
  {
    id: 5,
    path: "prawo-administracyjne",
    name: "Prawo administracyjne",
    img: prawoAdministracyjne,
    serviceImg: administracyjne,
    title: `Posiadam doświadczenie w prowadzeniu spraw przed organami władzy publicznej oraz sądami
        administracyjnymi.`,
    content: `Sporządzam odwołania od decyzji administracyjnych, skargi do wojewódzkich
        sądów administracyjnych oraz skargi kasacyjne do Naczelnego Sądu Administracyjnego. Obszar mojej
        praktyki w tej dziedzinie prawa obejmuje w szczególności prawo budowlane (m.in. uzyskanie
        pozwolenia na budowę, postępowanie legalizacyjne) oraz sprawy dot. cudzoziemców (m.in.
        legalizacja pobytu)`,
  },
  {
    id: 6,
    path: "prawo-gospodarcze",
    name: "Prawo gospodarcze",
    img: prawoGospodarcze,
    serviceImg: gospodarcze,
    title: `Świadczę pomoc prawną przedsiębiorcom prowadzącym jednoosobową działalność gospodarczą, jak
        i spółkom prawa handlowego.`,
    content: `Jest to kompleksowa obsługa prawna, obejmująca: doradztwo prawne
        i sporządzanie opinii prawnych, rejestrację przedsiębiorstw, sporządzanie i opiniowanie umów,
        prowadzenie sporów sądowych, udział w negocjacjach oraz windykację wierzytelności.`,
  },
];
