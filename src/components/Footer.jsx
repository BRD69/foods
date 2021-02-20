function Footer() {
    return <footer className="page-footer green darken-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text BRD
                <a className="grey-text text-lighten-4 right" href="#!">@BRD</a>
            </div>
        </div>
    </footer>

}

export {Footer}