import Image from "next/image";
import Link from "next/link";

export default function Footer (){
    return(
        <footer className="footer">
           <div className="footer__wrapper wrapper">
                <Link href="/" className="footer__logo">
                    <Image
                        className="footer__logo-img" 
                        src="/img/logo.svg"
                        alt="logo"
                        width={322}
                        height={44}
                    />
                </Link>
                <nav className="footer__navigation">
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><Link href="">Обо мне</Link></li>
                        <li className="footer__navigation-item"><Link href="">Проекты</Link></li>
                        <li className="footer__navigation-item"><Link href="">Услуги</Link></li>
                    </ul>
                </nav>
           </div>
           <Link href="" className="footer__creater wrapper">
                <span>Design by</span>
                <Image
                    className="footer__logo-designer" 
                    src="/img/logo-designer.png"
                    alt="logo"
                    width={56}
                    height={63}
                />
           </Link>
        </footer>
    )
}