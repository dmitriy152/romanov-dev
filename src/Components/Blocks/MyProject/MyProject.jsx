"use client"
import { useOnScreen } from "@/app/hooks/useOnScreen"
import Image from "next/image"
import Link from "next/link"
export default function MyProject (){
    let projects = [
        {subtitle: "Магазин косметики MAROON", link: "",image: "maroon.png", alt: "", width: 580, height: 360},
        {subtitle: "Интернет-магазин кофейных напитков Drink2Go", link: "",image: "drink2go.png", alt: "", width: 580, height: 431},
        {subtitle: "Агентство недвижимости HAYK DUBAI", link: "",image: "hayk-dubai.png", alt: "", width: 580, height: 549},
    ]
    const [ref, isVisible] = useOnScreen()
    return (
        <section ref={ref} className={isVisible ? "my-project my-project-mounted" : "my-project"}>
            <div className="my-project__wrapper wrapper">
                <h3 className="my-project-title title">Мое портфолио</h3>
                <ul className="my-project__list">
                    {
                        projects.map((item, index)=>{
                           return (
                            <li className="my-project__item" key={index}>
                                <Link href={item.link}>
                                    <Image
                                        className="my-project__item-image"
                                        src={`/img/my-project/${item.image}`}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                    />
                                    <h5 className="my-project__item-subtitle">{item.subtitle}</h5>
                                </Link>
                            </li>

                           )
                        })
                    }
                </ul>
                <Link href="/portfolio" className="my-project__more-btn"><span>Просмотреть больше проектов</span></Link>
            </div>
        </section>
    )
}