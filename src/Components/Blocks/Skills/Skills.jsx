"use client"

import { useOnScreen } from "@/app/hooks/useOnScreen"
import { useSkills } from "@/app/store/useSkills"
import SkillsItem from "@/Components/UI-Kit/SkillsItem/SkillsItem"

export default function Skills (){
    const [ref, isVisible] = useOnScreen()
    let skills = useSkills(state => state.skills)
    return(
        <section ref={ref} className={isVisible ? "skills skills-mounted" : "skills"}>
            <div className="skills__wrapper wrapper">
                <h2 className="skills-title title">Мои навыки</h2>
                <ul className="skills__list">
                    {skills.map((item, index)=>{
                        return (<SkillsItem animation={isVisible} item={item} index={index} key={index}/>)
                    })}
                </ul>
            </div>
        </section>
    )
}