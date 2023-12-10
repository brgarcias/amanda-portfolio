import { StaticImageData } from 'next/image';
import Icon1 from 'public/assets/images/icons/1.svg';
import Icon2 from 'public/assets/images/icons/2.svg';
import Icon3 from 'public/assets/images/icons/3.svg';

interface ServiceItem {
  title: string;
  icon: StaticImageData;
  text: string;
  link: string;
}

interface ServicesData {
  title: string;
  items: ServiceItem[];
}

const servicesData: ServicesData = {
  title: 'Services',
  items: [
    {
      title: 'UI/UX Design',
      icon: Icon1,
      text: 'Elevate your online presence with captivating user interfaces and seamless experiences',
      link: '/services/service-1',
    },
    {
      title: 'Logo Design',
      icon: Icon2,
      text: 'Establish a strong and cohesive brand identity that resonates with your audience.',
      link: '/services/service-2',
    },
    {
      title: 'Branding',
      icon: Icon3,
      text: 'All of which have a singular goal: to build environments where our clients thrive.',
      link: '/services/service-3',
    },
  ],
};

export default servicesData;
