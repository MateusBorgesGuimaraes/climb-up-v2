import type { LucideIcon } from "lucide-react/types";
import { assets } from "./assets/assets";
import type { CardInfos } from "./components/Card/Card";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export type Tips = {
  title: string;
  content: string;
};

export const CARDS_DATA: CardInfos[] = [
  {
    title: "LONG MOUNTAIN",
    difficulty: 3,
    location: "China, Xangai",
    image: assets.card1,
  },
  {
    title: "CARRASCKTY",
    difficulty: 5,
    location: "RUSSIA, YEKOVSITKY",
    image: assets.card2,
  },
  {
    title: "ESTOCON DEU",
    difficulty: 4,
    location: "CHILE, SANTA ELENA",
    image: assets.card3,
  },
  {
    title: "HOUSTON HILL",
    difficulty: 2,
    location: "CANADA, ARLOIW",
    image: assets.card4,
  },
];

export const TIPS: Tips[] = [
  {
    title: "Comece com um aquecimento",
    content:
      "Antes de começar a escalar, reserve alguns minutos para aquecer os músculos com alongamentos leves e exercícios simples. Isso ajuda a prevenir lesões e prepara seu corpo para o esforço físico da escalada.",
  },
  {
    title: "Aprenda as técnicas básicas",
    content:
      "Familiarize-se com as principais técnicas de escalada, como o posicionamento correto dos pés, o equilíbrio e o uso das agarras. Nossos instrutores estão disponíveis para orientar você nos primeiros passos e ajudar a construir uma boa base.",
  },
  {
    title: "Utilize os equipamentos adequados",
    content:
      "Certifique-se de utilizar os equipamentos necessários para a escalada, incluindo sapatilhas, cadeirinha e magnésio. Nossa estrutura oferece equipamentos de qualidade para aluguel, caso você ainda não tenha os seus.",
  },
  {
    title: "Dê atenção aos seus pés",
    content:
      "A escalada não depende apenas da força dos braços. Suas pernas desempenham um papel fundamental. Preste atenção ao posicionamento dos pés e procure encaixá-los corretamente nas agarras para manter o equilíbrio e economizar energia.",
  },
  {
    title: "Respeite seu próprio ritmo",
    content:
      "Não tenha pressa durante a escalada. Reserve um tempo para planejar seus movimentos e descanse sempre que necessário. Escalar é um desafio tanto mental quanto físico, por isso manter a calma e a concentração faz toda a diferença.",
  },
];

export type Photo = {
  src: string;
  alt: string;
  title: string;
  location: string;
};

export const GALLERY_DATA: Photo[] = [
  {
    src: assets.gallery1,
    title: "Céu em Chamas",
    location: "Nova Zelândia",
    alt: "Um céu alaranjado incendeia o horizonte enquanto a luz se reflete nas águas calmas do lago, com a cordilheira recortada em silhueta ao fundo.",
  },
  {
    src: assets.gallery1,
    title: "Vale das Geleiras",
    location: "Canadá",
    alt: "Picos nevados se erguem sobre um vale amplo, com pinheiros em primeiro plano e nuvens passando baixas entre as montanhas.",
  },
  {
    src: assets.gallery2,
    title: "Espelho Glacial",
    location: "Canadá",
    alt: "A última luz do dia toca os picos enquanto um lago de cor turquesa, típica de água glacial, se estende entre as encostas.",
  },
  {
    src: assets.gallery3,
    title: "Noite nas Dolomitas",
    location: "Itália",
    alt: "A Via Láctea se abre sobre picos rochosos com neve, com tons rosados no céu que contrastam com o breu das montanhas.",
  },
  {
    src: assets.gallery4,
    title: "Galáxia na Cordilheira",
    location: "Suíça",
    alt: "Um meteoro risca o céu roxo e estrelado, enquanto os picos cobertos de neve brilham sob a Via Láctea.",
  },
  {
    src: assets.gallery5,
    title: "Amanhecer entre Vales",
    location: "Itália",
    alt: "Raios de sol atravessam a névoa e desenham camadas de montanhas rochosas, em um vale que parece não ter fim.",
  },
];

export type Contact = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACTS: Contact[] = [
  {
    icon: MailIcon,
    label: "E-mail",
    value: "contato@climbup.com.br",
    href: "mailto:contato@climbup.com.br",
  },
  {
    icon: PhoneIcon,
    label: "Telefone",
    value: "(00) 00000-0000",
    href: "tel:+5500000000000",
  },
  {
    icon: MapPinIcon,
    label: "Endereço",
    value: "Rua das Montanhas, 123, Cidade, UF",
  },
  {
    icon: ClockIcon,
    label: "Horário",
    value: "Seg a sex, 6h às 22h · Sáb e dom, 8h às 18h",
  },
];
