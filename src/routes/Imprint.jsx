import '../css/Imprint.css';

const Imprint = () => {
    return (
    <div>
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Paul Schacher<br />
        Suhler Str. 11<br />
        98587 Steinbach-Hallenberg</p>

        <h2>Kontakt</h2>
        <p>E-Mail: hello@shoda-uwu.eu</p>

        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>

        <div style={{paddingTop: 20}}>
                <a href="/imprint" target="_blank">Imprint</a> <br/> <a href="/privacy-policy" target="_blank">Privacy Policy</a>
        </div>
    </div>
    );
    
}

export default Imprint;