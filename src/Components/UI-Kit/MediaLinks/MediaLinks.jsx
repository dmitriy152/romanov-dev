"use client"
import Image from "next/image";
import Link from "next/link";
import { useOnScreen } from "@/app/hooks/useOnScreen";
export default function MediaLinks (){
    const [ref, isVisible] = useOnScreen()
    let mediaIcons = ["youtube.svg", "vk.svg", "telegram.svg", "yandex-dzen.svg", "github.svg"]
    return(
        <ul ref={ref} className={isVisible ? "media__links media__links-mounted" : "media__links"}>
            {mediaIcons.map((item, index)=>{
                return (
                    <li className="media__links-item" 
                        key={index}
                        style={{
                            animationDelay: `${150 * (index)}ms`,
                        }}>
                        <Link href="">
                            <Image
                                className=""
                                src={`/img/media-icon/${item}`}
                                width={48}
                                height={48}
                            />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}