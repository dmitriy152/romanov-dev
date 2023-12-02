"use client"
import { useOnScreen } from "@/app/hooks/useOnScreen";
import Image from "next/image";
import Link from "next/link";

export default function Price (){
    let priceInfo = [
        "Верстка макета  и frontend-разработка сайтов и мобильных приложений",
        "Посадка верстки на CMS",
        "Разработка анимаций",
        "Разработка UI компонентов",
        "Правки на действующем сайте",
    ]
    const [ref, isVisible] = useOnScreen()
    return(
        <section ref={ref} className={isVisible ? "price price-mounted" : "price"}>
            <div className="price__wrapper wrapper">
                <h3 className="price__title title">Услуги</h3>
                <div className="price__info">
                    <ul className="price__info__list">
                        {priceInfo.map((item, index)=>{
                            return (
                                <li key={index} className="price__info__item">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <g clip-path="url(#clip0_379_11)">
                                        <path d="M19 34.8334C10.2552 34.8334 3.16663 27.7448 3.16663 19.0001C3.16663 10.2553 10.2552 3.16675 19 3.16675C27.7447 3.16675 34.8333 10.2553 34.8333 19.0001C34.8333 27.7448 27.7447 34.8334 19 34.8334ZM17.4214 25.3334L28.6155 14.1377L26.3767 11.8988L17.4214 20.8557L12.9421 16.3765L10.7033 18.6153L17.4214 25.3334Z" fill="url(#paint0_linear_379_11)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_379_11" x1="-3.69861" y1="17.4539" x2="38.1731" y2="17.3302" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0339731" stop-color="#3AC5FC"/>
                                        <stop offset="0.333333" stop-color="#4D54DF"/>
                                        <stop offset="0.625" stop-color="#743EE1"/>
                                        <stop offset="1" stop-color="#F46FFB"/>
                                        </linearGradient>
                                        <clipPath id="clip0_379_11">
                                        <rect width="38" height="38" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </figure>
                                    <span>{item}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <Image
                        src="/img/price/price-img.png"
                        alt="price-img"
                        width={580}
                        height={369}
                    />
                </div>
                <Link href="/services" className="price__more-btn"><span>Узнать подробнее</span></Link>
            </div>
        </section>
    )
}