import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export type SocialMediaProps = {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
};

export const socialMedia: SocialMediaProps[] = [
  {
    id: 1,
    name: "instagram",
    icon: <FaInstagram className="text-3xl text-primary" />,
    url: "https://www.instagram.com/neurocirujano_danielurbano/",
  },
  {
    id: 2,
    name: "email",
    icon: <FaEnvelope className="text-3xl text-primary" />,
    url: "mailto:daniel.urbano.quijano@gmail.com",
  },
  {
    id: 3,
    name: "phone",
    icon: <FaPhone className="text-3xl text-primary" />,
    url: "tel:+584127515146",
  },
  {
    id: 4,
    name: "whatsapp",
    icon: <FaWhatsapp className="text-3xl text-primary" />,
    url: "https://api.whatsapp.com/send?phone=584127515146",
  },
];
