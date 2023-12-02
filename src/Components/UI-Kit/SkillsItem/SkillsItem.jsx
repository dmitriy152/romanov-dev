"use client"

import { useRef, useState, useEffect } from "react";

export default function SkillsItem({ animation, item, index }) {
  const circleRefs = useRef([]);
  const [refsReady, setRefsReady] = useState(false);
  useEffect(()=>{
      if(animation){
        if (circleRefs.current.length === 6 && !refsReady) {
          setRefsReady(true);
          if (item.value > 0 && item.value <= 6) {
            const delay = 200;
            for (let i = 0; i < item.value; i++) {
              setTimeout(() => {
                circleRefs.current[i].setAttribute("fill", "#4D54DF");
              }, i * delay);
            }
          }
        }
      }

  }, [animation, item.value])

  return (
    <li className="skills__item" key={index}>
        <h4 className="skills__item-title">{item.title}</h4>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" width="230" height="25" viewBox="0 0 230 25" fill="none">
              <circle ref={(el) => circleRefs.current.push(el)} cx="12.5" cy="12.5" r="12.5" fill="#272B73" />
              <circle ref={(el) => circleRefs.current.push(el)} cx="53.5" cy="12.5" r="12.5" fill="#272B73" />
              <circle ref={(el) => circleRefs.current.push(el)} cx="94.5" cy="12.5" r="12.5" fill="#272B73" />
              <circle ref={(el) => circleRefs.current.push(el)} cx="135.5" cy="12.5" r="12.5" fill="#272B73" />
              <circle ref={(el) => circleRefs.current.push(el)} cx="176.5" cy="12.5" r="12.5" fill="#272B73" />
              <circle ref={(el) => circleRefs.current.push(el)} cx="217.5" cy="12.5" r="12.5" fill="#272B73" />
          </svg>
        </figure>
    </li>
  );
}