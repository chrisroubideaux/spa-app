// guides data

type Guides = {
  id: number;
  title: string;
  name: string;
  email: string;
  phone: string;
  experience: string; 
  bio: string;
  photo: string;
  image: string;
  image2: string; 
};
    
const guides: Guides [] = [ 
  {
    id: 1,
    title: 'Owner',
    name: 'Jennifer Rieger',
    email: 'riegerjennifer@gmail.com',
    phone: '555-555-5555',
    experience: '14 years',
    bio: 'With 14 years of extensive experience as a masseuse and spa beautician, Jennifer brings a wealth of knowledge and expertise to the realm of wellness and beauty. Her journey in the industry has been marked by a deep commitment to providing top-notch services and a passion for helping individuals achieve rejuvenation and relaxation.',
    photo: '/owner/card.png',
    image: '/owner/bio.png',
    image2: '/owner/bio3.png',

  },
  {
    id: 2,
    title: 'Owner',
    name: 'Sharon Fitsgerald',
    email: 'fitsgeraldsharon@gmail.com',
    phone: '555-555-5555',
    experience: '9 years',
    bio: 'With nine years of dedicated practice as a skilled physical therapist, Sharon possesses a profound understanding of the human body and its mechanics. Her expertise extends to crafting personalized therapies and treatments tailored to individual needs, promoting recovery and overall well-being.',
    photo: '/owner/card2.png',
    image: '/owner/bio2.png',
    image2: '/owner/bio3.png',

  },
];
    
export default guides;
