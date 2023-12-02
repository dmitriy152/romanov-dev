import { create } from "zustand";

export const useSkills = create(set => ({
    skills: [
        {title: "Html", value: 6},
        {title: "Pug", value: 6},
        {title: "Css", value: 6},
        {title: "Less/Scss", value: 6},
        {title: "JS", value: 6},
        {title: "React/NextJS", value: 6},
        {title: "React-Native", value: 4},
        {title: "Gulp", value: 6},
        {title: "NodeJS", value: 5},
        {title: "Express", value: 5},
        {title: "MySQL", value: 5},
    ],
}))