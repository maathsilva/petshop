
import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { WhatsappLogo, FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className="bg-purple-700 py-16 text-white">
      <div className='container mx-auto px-4'>

        <div className=' pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Pet Shop</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/5511981614122?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-600"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: petshop@icloud.com</p>
            <p>Telefone: (11) 98161-0000</p>
            <p>Rua Tuiuti - 589, Tatuapé, São Paulo</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
              >
                <FacebookLogo className='w-8 h-8 hover:text-blue-500' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <InstagramLogo className='w-8 h-8 hover:text-pink-500' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <YoutubeLogo className='w-8 h-8 hover:text-red-500' />
              </a>
            </div>
          </div>

          

        </footer>

        <p className=' text-xl font-semibold text-center'>Desenvolvido Por Matheus Silva</p>

      </div>
    </section>
  )
}