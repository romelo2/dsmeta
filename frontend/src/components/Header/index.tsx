import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desnvolvido por <a href="https://www.linkedin.com/in/robson-andrade-melo-2019/">robsonmelo@linkedin</a>
                    </p>
            </div>
        </header>
    )
}

export default Header