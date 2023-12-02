"use client"
import Image from "next/image";
import { useOnScreen } from "@/app/hooks/useOnScreen";
export default function About (){
    const [ref, isVisible] = useOnScreen()
    
    return(
        <section ref={ref} className={isVisible ? 'about about-mounted' : 'about'} id="about">
            <div className="about__wrapper wrapper">
                <h3 className="title">Обо мне</h3>
                <div className="about__info">
                    <Image
                        src="/img/about/about-img.png"
                        alt="abut-img"
                        width={580}
                        height={587}
                        className="about__info-img"
                    />
                    <p className="about__description">
                        Я закончил обучение по профессии Frontend-разработчик, та так же курс по разработке 2D и 3D анимаций для web-приложений. 
                        Мой опыт работы с сайтами более 2 лет, помогу визуализировать ваши задачи в быстрый срок без потери качества
                    </p>
                </div>
            </div>
            <button className="btn-circle">
                <span>Скачать резюме</span>
            </button>
        </section>
    )
}