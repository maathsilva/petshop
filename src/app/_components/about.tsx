import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold text-purple-700">Sobre Nós</h2>

            <p className="text-purple-500">
              Acreditamos que cada pet merece cuidado, carinho e atenção
              especial. Nosso compromisso é oferecer um atendimento de
              qualidade, com serviços e produtos pensados para o bem-estar do
              seu melhor amigo. Com uma equipe apaixonada por animais, buscamos
              proporcionar um ambiente seguro e acolhedor, onde seu pet recebe
              todo o amor e dedicação que merece. Seja para banho, tosa ou
              cuidados especiais, estamos aqui para tornar a experiência do seu
              pet ainda mais feliz.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-purple-500">
                <Check className="text-green-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2 text-purple-500">
                <Check className="text-green-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2 text-purple-500">
                <Check className="text-green-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/5511981614133?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md font-semibold hover:bg-green-600"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-purple-500"
              >
                <MapPin className="w-5 h-5 text-purple-500" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
