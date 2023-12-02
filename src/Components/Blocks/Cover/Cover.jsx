"use client"
import Image from "next/image";
import { useOnScreen } from "@/app/hooks/useOnScreen";

export default function Cover (){
    const [ref, isVisible] = useOnScreen()
    return (
        <section ref={ref} className={isVisible ? "cover cover-mounted" : "cover"}>
            <div className="cover__wrapper wrapper">
                <div className="cover__left">
                    <h4 className="cover-subtitle subtitle">FRONTEND-DEVELOPER</h4>
                    <h2 className="cover-title title">Дмитрий романов</h2>
                    <p className="cover-description description">Меня зовут Дмитрий, я frontend-разработчик. Создаю оптимизированные сайты  с использованием современных технологий и 2D/3D анимаций.</p>
                </div>
                <div className="cover__right">
                    <Image
                        src="/img/cover/cover-bg.png"
                        alt=""
                        width={664}
                        height={664}
                        className="cover__right-bg"
                    />
                </div>
            </div>
        </section>
    )
}