import { StaticImageData } from 'next/image';
import Customer1 from 'public/assets/images/customers/1.jpg';
import Customer2 from 'public/assets/images/customers/2.jpg';
import Customer3 from 'public/assets/images/customers/3.jpg';

interface ReviewItem {
  name: string;
  image: StaticImageData;
  role: string;
  text: string;
}

interface ReviewsData {
  title: string;
  items: ReviewItem[];
}

const reviewsData: ReviewsData = {
  title: 'Reviews',
  items: [
    {
      name: 'Paul Trueman',
      image: Customer1,
      role: 'Eqanta app',
      text: 'Working with Courtney Davis as our UI designer was an absolute pleasure. Her attention to detail and creative approach brought our vision to life. The user interface she designed exceeded our expectations, and we received positive feedback from our clients. Highly recommended!',
    },
    {
      name: 'Olivia Oldman',
      image: Customer2,
      role: 'Eqanta app',
      text: "I had the opportunity to collaborate with Courtney, and I must say she is incredibly talented. Her ability to understand our brand and translate it into an interface was impressive. Courtney's designs were intuitive, and enhanced the overall user experience. I look forward to working with her again!",
    },
    {
      name: 'Oscar Newman',
      image: Customer3,
      role: 'Eqanta app',
      text: "Courtney Davis is an exceptional UI designer. She has a keen eye for aesthetics and understands how to create interfaces. Courtney's designs greatly improved the usability of our application, and we couldn't be happier with the results. Highly skilled and reliable!",
    },
  ],
};

export default reviewsData;
