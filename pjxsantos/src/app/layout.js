import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólio Paulo Jorge',
  description: 'crio web designs personalizados. Tenho habilidade em escrever códigos bem projetados, testáveis ​e eficientes usando as melhores práticas atuais em desenvolvimento Web. Aprendo rápido, trabalho duro e trabalho em equipe, com proficiência na criação de páginas da web criativas e inovadoras.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
