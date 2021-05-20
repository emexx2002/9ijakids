function Navbar({
    data,
    ...props

}) {


    return (
        <div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "black", justifyContent: "center" }}>
                <a className="navbar-brand mt-2" href="#" >
                    <img src="/logo.png" width="40" height="40" alt="" style={{ borderRadius: "50%" }} />
                    <span style={{ color: "white", fontWeight: "bold" }}> 9IJAKIDS</span>
                </a>

            </nav>
        </div>
    )
}

export default Navbar
