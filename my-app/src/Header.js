function Header() {
    return (
        <nav>
            <img className="logo" src={require("./image.png")} alt="Logo" />
            <ul>
                <li >Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Header;