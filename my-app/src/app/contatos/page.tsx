import { Metadata } from "next"

export const metadata: Metadata ={
    title: "Contatos",
    description: "Pagina de contatos",
    openGraph:{
        title: "Contatos",
        description: "Pagina de contatos",
        url: "https://example.com/contatos",
        siteName: "Meu Projeto",
        images: [
            {
                url: "https://example.com/contatos-image.png",
                width: 800,
                height: 600,
                alt: "Contatos Image"
            }
        ],
        locale: "pt-BR",
        type: "website",
    },
    robots:{
        index: true,
        follow: true,
        nocache: false
    }
    
}
export default function Contatos(){
    return(
        <div>
            <h1>Aqui tem contatos</h1>
        </div>
    )
}