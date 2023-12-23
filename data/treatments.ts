// data for body treatments 

type Treatments = {
  id: number;
  service: string;
  name: string;
  bio: string;
  experience: string; 
  phone: string;
  email: string;
  title: string;
  description: string;
  price: string;
  addOn1: string;
  addOn2: string;
  addOn3: string;
  addOn4: string;
  addOn5: string;
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
    
const treatments: Treatments [] = [ 
  {
    id: 1,
    service: "body treament",
    name: "kayla Johnson",
    bio: "With over a decade of experience, Kayla is an expert in body wrap treatments, providing personalized services tailored to meet individual needs and ensure a rejuvenating experience.",
    email: "johnsonkayla@gmail.com",
    phone: "555-555-5555",
    experience: "10 years experience",
    title: " body wrap",
    description: "Experience the indulgence of our body wrap treatments, meticulously designed to offer detoxification, relaxation, and rejuvenation. Our treatments utilize high-quality products and techniques to provide a deeply nourishing experience.",
    price: "$ 75",
    addOn1: "", 
    addOn2: "",
    addOn3: "",
    addOn4: "",
    addOn5: "",
    image: "/body/card.png",
    image2: "",
    photo: "/body/bio.png",
    slot: ' 11:00am 12:00pm',
    slot2: '12:00pm 1:00pm',
    slot3: '1:00pm 2:00pm',
    slot4: '2:00pm 3:00pm',
    slot5: '3:00pm 4:00pm',
    slot6: '4:00pm 5:00pm',
    slot7: '5:00pm 6:00pm',
    days: 'Monday-Friday',
  },
  {
    id: 2,
    service: "body treament",
    name: "Chelsea Parker",
    bio: "With five years of expertise, Chelsea excels in providing rejuvenating back peel treatments tailored to your skin's needs, ensuring a relaxing and revitalizing experience.",
    email:"parkerchelswa@gmail.com",
    phone: "555-555-5555",
    experience: "5 years experience",
    title: "back peel",
    description: "Experience the indulgence of our back peel treatments, expertly designed to exfoliate and rejuvenate your skin. Our treatment utilizes premium products and techniques to provide a refreshed and glowing complexion.",
    price: "$ 100",
    addOn1: "", 
    addOn2: "",
    addOn3: "",
    addOn4: "",
    addOn5: "",
    image: "/body/card2.png",
    image2: "",
    photo: "/massages/bio2.png",
    slot:  '11:00am 12:00pm',
    slot2: '12:00pm 1:00pm',
    slot3: '1:00pm 2:00pm',
    slot4: '2:00pm 3:00pm',
    slot5: '3:00pm 4:00pm',
    slot6: '4:00pm 5:00pm',
    slot7: '5:00pm 6:00pm',
    days: 'Monday-Friday',
},
{
    id: 3,
    service: "body treament",
    name: " Becky Rodgers",
    bio: "With three years of dedicated practice, Becky excels in offering nourishing and invigorating seaweed wrap treatments, aiming to revitalize your body and restore its natural balance.",
    email: "klinebryce@gmail.com",
    phone: "555-555-5555",
    experience: "3 years experience",
    title: "seaweed wrap",
    description: "Indulge in our seaweed wrap, a detoxifying and hydrating treatment utilizing premium seaweed extracts to nourish your skin and promote relaxation. Experience a renewed sense of vitality and smooth, supple skin.",
    price: " $100",
    addOn1: "", 
    addOn2: "",
    addOn3: "",
    addOn4: "",
    addOn5: "",
    image: "/body/card3.png",
    image2: "",
    photo: "/body/bio3.png",
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
    id: 4,
    service: "body treament",
    name: "Jessica Stevenson",
    bio: "Jessica, with four years of hands-on experience, specializes in rejuvenating body scrub treatments designed to exfoliate and revitalize your skin.",
    experience: "4 years experience",
    phone: "555-555-5555",
    title: "body scrub",
    email:"gomessara@gmail.com",
    description: "Indulge in our invigorating body scrub treatment, meticulously crafted to exfoliate and renew your skin, leaving it smooth, radiant, and revitalized.",
    price: "30 min -",
    addOn1: "deluxe - $50", 
    addOn2: "gold - $80",
    addOn3: "",
    addOn4: "",
    addOn5: "",
    image: "/body/card4.png",
    image2: "",
    photo: "/body/bio4.png",
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
    
export default treatments;