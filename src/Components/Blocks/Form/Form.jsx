"use client"

import Image from "next/image"
import Button from "@/Components/UI-Kit/Button/Button"
import { useOnScreen } from "@/app/hooks/useOnScreen"
export default function Form (){
    const [ref, isVisible] = useOnScreen()
    return(
        <section ref={ref} className={isVisible ? "form form-mounted" : "form"}>
            <div className="form__wrapper wrapper">
                <h3 className="form__title title">Связаться со мной</h3>
                <form action="" className="form__container">
                    <div className="form__img__wrapper">
                        <Image 
                            className="form__img"
                            src="/img/form/image.png"
                            alt="form-img"
                            width={408}
                            height={408}
                        />
                    </div>
                    <div className="form__fields">
                        <label htmlFor="">
                            <span>Имя</span>
                            <input className="input-name" type="text" placeholder="Введите свое имя..."/>
                        </label>
                        <label htmlFor="">
                            <span>E-mail</span>
                            <input className="input-email" type="text"  placeholder="Введите свою почту..."/>
                        </label>
                        <label>
                            <span>Сообщение</span>
                            <textarea placeholder="Чем я могу вам помочь?" name="" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </form>
                <Button title="Отправить" additionalСlass=""/>
            </div>
        </section>
    )
}