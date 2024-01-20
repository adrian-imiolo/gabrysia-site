import LogoWhite from "./LogoWhite";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="footer">
      <div className="footer-el">
        <p>Kancelaria Adwokacka Adwokat Gabriela Urszulak</p>
        <p>ul. Świebodzka 6 lok. 3, 50-046 Wrocław</p>
      </div>
      <div className="footer-el">
        <LogoWhite />
      </div>

      <div className="footer-el">
        <p>NIP: 8982299067</p>
        <p>Konto bankowe: 31 1090 1955 0000 0001 5577 5413 Santander S.A.</p>
      </div>
      <div className="footer-el">
        <p>&#169; {currentYear} | Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
}
export default Footer;
