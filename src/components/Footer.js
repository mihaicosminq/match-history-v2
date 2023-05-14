import "./Footer.css"
import image from "../bettersg.png"

function Footer (){
    return (
        <>
            <footer className="footer">
            <div style={{width:"1200px",marginLeft:"160px"}}>
                <section className="footerWrapper">
                    <strong className="title">
                        <a href="">
                            <img width={450} src={image}/>
                        </a>
                    </strong>
                    <div>
                        <strong className="title">
                            Xayah
                        </strong>
                        <ul className="footerList">
                            <li>
                                About
                            </li>
                            <li>
                                Company
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Logo history
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="title">
                            Products
                        </strong>
                        <ul className="footerList">
                            <li>
                                League of Legends
                            </li>
                            <li>
                                Valorant
                            </li>
                            <li>
                                LOR
                            </li>
                            <li>
                                Overwatch
                            </li>
                            <li>
                                Esports
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="title">
                            Apps
                        </strong>
                        <ul className="footerList">
                            <li>
                                Xayah android
                            </li>
                            <li>
                                Xayah ios
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="title">
                            Resources
                        </strong>
                        <ul className="footerList">
                            <li>
                                Privacy policy
                            </li>
                            <li>
                                Terms of use
                            </li>
                            <li>
                                Help
                            </li>
                            <li>
                                Feedback
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="title">
                            More
                        </strong>
                        <ul className="footerList">
                            <li>
                                Advertise
                            </li>
                            <li>
                                Business
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            </footer>
        </>
    )
}

export default Footer;