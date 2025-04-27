import { ReactNode } from "react";

interface SocialProps{
    url: string;
    children: ReactNode;
}

export function Social({url, children}: SocialProps){
    return(
        <a 
        href={url} 
        rel="noopener noreferrer" //Avisa que é uma url externa
        target="_blank" //Abre em uma nova aba
        > 
        {children}
        </a>
    )
}