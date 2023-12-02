"use client"
export default function Button ({title, additionalСlass}){
    return(
        <button className={`btn-def ${additionalСlass}`}>
            <span>{title}</span>
        </button>
    )
}