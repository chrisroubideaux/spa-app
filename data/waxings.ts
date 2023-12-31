// waxing data

type Waxings = {
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
      
const waxings: Waxings [] = [ 
  {
    id: 1,
    service: "waxing",
    name: "Renene Nelson",
    bio: "With over a decade of experience, Renene specializes in various waxing treatments, providing exceptional services tailored to individual preferences for a comfortable and rejuvenating experience.",
    email: "renenenelson@gmail.com",
    phone: "555-555-5555",
    experience: "14 years experience",
    title: "basic waxing",
    description: "Step into a world of refined grooming with our exclusive waxing services. Embrace the meticulous precision of our basic waxing package, meticulously tailored for the precise removal of unwanted hair from areas such as the lip, chin, nose, and eyebrows. Elevate your grooming experience by opting for our comprehensive face waxing upgrade, adding a touch of sophistication and finesse for an additional $50. Our attention to detail ensures a polished and immaculate look, unveiling a flawlessly groomed appearance that accentuates your natural elegance.",
    price: "$30",
    addOn1: "eyebrow - $30 add on ", 
    addOn2: "nose - $30 add on",
    addOn3: "lip - $30 add on",
    addOn4: "chin- 30 add on",
    addOn5: "face waxing - $50 includes (lip, chin, nose, eyebrows)",
    image: " /waxings/card.png",
    image2: "",
    photo: "/waxings/bio.png",
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
    id: 2,
    service: "waxing",
    name: "Annie Parker",
    bio: "Annie Parker brings five years of expertise in providing top-notch upper body waxing treatments designed to enhance your skin's radiance and smoothness, ensuring a revitalizing and comforting experience.",
    email:"annieparker@gmail.com",
    phone: "555-555-5555",
    experience: "5 years experience",
    title: "upper body waxing",
    description: "Indulge in our upper body waxing treatments, focusing on enhancing your skin's tone and texture. Experience our specialized back peel treatments, meticulously crafted to exfoliate and rejuvenate your skin, leaving you with a refreshed and radiant complexion. You can also opt for additional add-ons like full chest, half arm, full arm, and underarm treatments for personalized waxing care.",
    price: "  $40 ",
    addOn1: " full chest - $40", 
    addOn2: " half arm - $40",
    addOn3: " full arm - $50",
    addOn4: " under arm - $40",
    addOn5: "back - $80 add on",
    image:  "/waxings/card2.png",
    image2: "",
    photo: "/waxings/bio2.png",
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
    id: 3,
    service: "waxing",
    name: " Ari Swift",
    bio: "Ari Swift brings seven years of experience in providing enriching and revitalizing lower body waxing treatments designed to pamper your skin and restore its natural beauty.",
    email: "swiftari@gmail.com",
    phone: "555-555-5555",
    experience: "7 years experience",
    title: "lower body waxing",
    description: "Experience our lower body waxing treatments that include nourishing seaweed wrap elements, meticulously crafted to detoxify and hydrate your skin. Our premium seaweed extracts ensure skin rejuvenation and relaxation, leaving you feeling revitalized and with smooth, supple skin. Choose from our range of add-ons, including half leg, full leg, feet treatment, both legs bundle, or a combined legs and feet bundle for complete pampering.",
    price: " $40",
    addOn1: "half leg - $40 ", 
    addOn2: "full leg - $80 ",
    addOn3: "feet - $20 per foot ",
    addOn4: "both legs - $130",
    addOn5: "bikini - $50 add on",
    image: "/waxings/card3.png",
    image2: "",
    photo: "/waxings/bio3.png",
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
    service: "waxing",
    name: "Alison Mckinney",
    bio: "Alison brings four years of hands-on expertise specializing in Brazilian waxing treatments designed to provide a smooth and rejuvenated skin experience.",
    experience: "4 years experience",
    phone: "555-555-5555",
    title: "braziian waxing",
    email:"mckinneyalison@gmail.com",
    description: "Discover the path to vibrant, glowing skin through our exceptional Brazilian waxing treatment. Crafted with meticulous care and attention, our treatment transcends traditional hair removal by rejuvenating your skin, enhancing its inherent radiance and texture. Embrace this transformative experience designed not just to remove hair but to invigorate and revitalize your skin. Feel the revitalizing sensation and exude confidence with skin that's beautifully pampered and cared for.",
    price: " $80",
    addOn1: "brazilian - $80", 
    addOn2: "brozilian - $80",
    addOn3: "brazillian half off with purchase of gift card - $40",
    addOn4: " brozilian half off with purchase of gift card - $40",
    addOn5: "tinting - $20 add on",
    image: "/waxings/card4.png",
    image2: "",
    photo: "/waxings/bio4.png",
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
      
export default waxings;