
const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="row mx-0 mb-6 text-center">
                <div className="col-md-3 mb-5 mb-md-0">
                    <a className="navbar-brand pt-0 mr-0" href="/#">Mebel</a>
                </div>
                <div className="col-md-3 mb-5 mb-md-0">
                    <ul>
                        <li>
                            <h6 className="mb-4">SHOP</h6>
                        </li>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Shop All</a></li>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5 mb-md-0">
                    <ul>
                        <li>
                            <h6 className="mb-4">POLICY</h6>
                        </li>
                        <li><a href="/#">FAQ</a></li>
                        <li><a href="/#">Shipping & Returns</a></li>
                        <li><a href="/#">Store Policy</a></li>
                        <li><a href="/#">Payment Methods</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>
                            <h6 className="mb-4">CONTACT</h6>
                        </li>
                        <li>Tel. 0208 030 3242</li>
                        <li>enquiries@mebel.co.uk</li>
                    </ul>
                </div>
            </div>
            <div className="copyright-wrapper d-flex justify-content-center">
                <p className="copyright-text">Copyright &#169; The Mebel Company Ltd 2021</p>
            </div>
        </footer>
    )
}
export default Footer