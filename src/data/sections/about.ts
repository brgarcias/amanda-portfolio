import { StaticImageData } from 'next/image';
import Avatar from 'public/assets/images/person/avatar.jpg';
import Sign from 'public/assets/images/person/sign.png';

type UserProfile = {
  avatar: {
    image: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  signature: {
    image: StaticImageData;
    alt: string;
  };
};

export const userProfile: UserProfile = {
  avatar: {
    image: Avatar,
    alt: 'avatar',
  },
  title: 'Hi! My name is Courtney, <br/>I’m UI/UX Designer based in Toronto',
  description:
    "I am a passionate and dedicated UI/UX designer with a strong focus on creating exceptional user experiences. I thrive on transforming complex ideas into intuitive and visually appealing designs. With a keen eye for detail and a user-centered approach, I strive to deliver impactful solutions that engage and delight users. Let's collaborate to bring your digital products to life!",
  signature: {
    image: Sign,
    alt: 'signature',
  },
};
