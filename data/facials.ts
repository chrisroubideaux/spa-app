// data for facials page

type Facials = {
  _id: number;
  service: string;
  name: string;
  bio: string;
  experience: string;
  phone: string;
  email: string;
  title: string;
  description: string;
  price: string;
  price2: string;
  image: string;
  image2: string;
  photo: string;
  slot: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
  slot7: string;
  days: string;
};
    
const facials: Facials[] = [ 
   {
     _id: 1,
     service: "Facial",
     name: "Maddie Smith",
     bio: "With over 7 years of experience in skincare and aesthetics, Maddie is dedicated to providing personalized facial treatments that cater to individual skin types. Her expertise lies in using natural ingredients and specialized techniques to enhance skin health and promote a radiant complexion.",
     email: "smithmaddie@gmail.com",
     phone: "555-555-5555",
     experience: "7 years experience",
     title: "basic facial",
     description: "Indulge in our basic facial treatment designed to cleanse, exfoliate, and hydrate your skin. This gentle yet effective facial addresses specific skin concerns while promoting overall skin health. With carefully selected products and personalized care, Maddie ensures a relaxing experience that leaves your skin feeling refreshed and rejuvenated.",
     price: "$100",
     price2: "$200",
     image: "/facials/card.png",
     image2: "",
     photo: "/facials/bio.png",
     slot: '11:00am 12:00pm',
     slot2: '12:00pm 1:00pm',
     slot3: '1:00pm 2:00pm',
     slot4: '2:00pm 3:00pm',
     slot5: '3:00pm 4:00pm',
     slot6: '4:00pm 5:00pm',
     slot7: '5:00pm 6:00pm',
     days: 'Monday-Friday',
    },
    {
     _id: 2,
     service: "Facial",
     name: "Alicia Moore",
     bio: "With 8 years of experience in skincare and facial treatments, Alicia is passionate about delivering high-quality skincare solutions tailored to individual needs. Her expertise lies in providing deep facial treatments that target skin imperfections and promote a rejuvenated, radiant complexion.",
     email: "alicamoore@gmail.com",
     phone: "555-555-5555",
     experience: "8 years experience",
     title: "Deep Facial",
     description: "Experience the revitalizing effects of our deep facial treatment designed to penetrate deeper layers of the skin. Alicia uses specialized techniques and premium skincare products to address specific skin concerns, promoting a more youthful appearance and enhanced skin texture. Indulge in this luxurious treatment for a refreshed and rejuvenated look.",
     price: "$125",
     price2: "couple - $300",
     image: "/facials/card2.png",
     image2: "",
     photo: "/facials/bio2.png",
     slot: '11:00am 12:00pm',
     slot2: '12:00pm 1:00pm',
     slot3: '1:00pm 2:00pm',
     slot4: '2:00pm 3:00pm',
     slot5: '3:00pm 4:00pm',
     slot6: '4:00pm 5:00pm',
     slot7: '5:00pm 6:00pm',
     days: 'Monday-Friday',
    },
    {
     _id: 3,
     service: "Facial",
     name: "Tracy Wilson",
     bio: "With 7 years of experience in skincare and beauty treatments, Tracy specializes in providing advanced facial treatments tailored to enhance skin health and radiance. Her commitment to skincare excellence and personalized care ensures clients achieve optimal results.",
     email: "wilsontracy@gmail.com",
     phone: "555-555-5555",
     experience: "7 years experience",
     title: "micro-peel",
     description: "Discover the transformative effects of our micro-peel facial treatment meticulously designed by Tracy. This advanced exfoliation procedure gently removes dead skin cells, revealing a smoother, more radiant complexion. Tracy's expertise in this treatment ensures a safe and effective procedure, leaving your skin rejuvenated and revitalized.",
     price: "$180",
     price2: "$couple-360",
     image: "/facials/card3.png",
     image2: "",
     photo: "/facials/bio4.png",
     slot: '11:00am 12:00pm',
     slot2: '12:00pm 1:00pm',
     slot3: '1:00pm 2:00pm',
     slot4: '2:00pm 3:00pm',
     slot5: '3:00pm 4:00pm',
     slot6: '4:00pm 5:00pm',
     slot7: '5:00pm 6:00pm',
     days: 'Monday-Friday',
    }, 
    {
      _id: 4,
      service: "Facial",
      name: "Rayven Grimes",
      bio: "With 4 years of experience in skincare and facial treatments, Rayven specializes in providing customized deluxe facial services. Her dedication to tailoring treatments ensures clients receive personalized care for their skincare needs.",
      experience: "4 years experience",
      phone: "555-555-5555",
      title: "custom deluxe facial",
      email:"grimesrayven@gmail.com",
      description: "Indulge in the ultimate pampering experience with Rayven's custom deluxe facial. This specialized treatment combines advanced techniques and carefully selected products to address specific skin concerns, leaving your skin feeling refreshed, rejuvenated, and glowing.",
      price: "$200",
      price2: "couple $400", 
      image: "/facials/card4.png",
      image2: "",
      photo: "/facials/bio3.png",
      slot: '11:00am 12:00pm',
      slot2: '12:00pm 1:00pm',
      slot3: '1:00pm 2:00pm',
      slot4: '2:00pm 3:00pm',
      slot5: '3:00pm 4:00pm',
      slot6: '4:00pm 5:00pm',
      slot7: '5:00pm 6:00pm',
      days: 'Monday-Friday',
    },  
];
    
export default facials;