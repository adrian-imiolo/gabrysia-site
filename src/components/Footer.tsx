import Logo from "./Logo"

function Footer() {

const currentDate = new Date();
const currentYear = currentDate.getFullYear()


  return (
    <div className="footer">
        <div>
            <p>Kancelaria Adwokacka Adwokat Gabriela Urszulak</p>
            <p>ul. Świebodzka 6 lok. 3, 50-046 Wrocław</p>
        </div>
        <div>
            <Logo />
        </div>
        <div>
            <p>NIP: 8982299067</p>
            <p>Konto bankowe: 31 1090 1955 0000 0001 5577 5413 Santander S.A.</p>
        </div>
        <div>
            <p>&#169;{currentYear} | Wszelkie prawa zastrzeżone</p>
            <p>Projekt i realizacja: <a target="_blank" href="https://www.linkedin.com/in/adrian-imiolo/">Adrian Imioło</a></p>
        </div>
    </div>
  )
}
export default Footer