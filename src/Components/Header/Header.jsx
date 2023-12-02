"use client"
import Link from "next/link"
import Button from "@/Components/UI-Kit/Button/Button"
import Image from "next/image"
import NavLink from "../UI-Kit/NavLink/NavLink"
import { useScrollStatus } from "@/app/hooks/useScrollStatus"
export default function Header (){
    const hasScrolled = useScrollStatus(10);
    return(
        <header className={`header ${hasScrolled ? "heder-scroll" :""}`} >
            <div className="header__wrapper">
                <Link href="/" className="header__logo">
                    <Image
                        className="header__logo-img" 
                        src="/img/logo.svg"
                        alt="logo"
                        width={322}
                        height={44}
                    />
                </Link>
                <nav className="header__navigation">
                    <ul className="header__navigation-list">
                        <li className="header__navigation-item"><NavLink href="/" title="Главная"/></li>
                        <li className="header__navigation-item"><NavLink href="/pages/blog" title="Блог"/></li>
                        <li className="header__navigation-item"><NavLink href="/pages/portfolio" title="Портфолио"/></li>
                        <li className="header__navigation-item"><NavLink href="/pages/services" title="Услуги"/></li>
                        <li className="header__navigation-item"><NavLink href="/pages/contacts" title="Контакты"/></li>

                        {/*<li className="header__navigation-item"><NavLink href="/cources" title="Курсы"/></li>*/}
                    </ul>
                </nav>
                <Button title="Связаться" additionalСlass=""/>
            </div>
        </header>
    )
}