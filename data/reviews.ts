type Reviews = {
    id: number;
    service: string;
    name: string;
    title: string;
    review: string;
    image: string;
  };
  
  const reviews: Reviews[] = [
    {
      id: 1,
      service: "Massage",
      name: "Robin Edwards",
      title: "business consultant",
      review: "Club Ivy's massage therapy is a game-changer! I felt rejuvenated and stress-free after each session. They truly excel in providing personalized care and attention.",
      image: "/reviews/review1.png",
    },
    {
      id: 2,
      service: "Massage",
      name: "Matthew Reeves",
      title: "software engineer",
      review: "My experience at Club Ivy was exceptional! Their massage treatments were precisely what I needed after long workdays. Their therapists are highly skilled and attentive.",
      image: "/reviews/review2.png",
    },
    {
      id: 3,
      service: "Massage",
      name: "Tiffany Luck",
      title: "medical student",
      review: "Club Ivy's massage sessions were a blessing during my stressful study periods. The therapists were knowledgeable and tailored each session to perfection.",
      image: "/massages/review3.png",
    },
    {
      id: 4,
      service: "facials",
      name: "Laura Nunez",
      title: "banker",
      review: "I indulged in Club Ivy's facial treatments, and the results were incredible! My skin felt refreshed and rejuvenated. The staff's expertise made the experience truly worthwhile.",
      image: "/facials/facial1.png",
    },
    {
      id: 5,
      service: "facials",
      name: "Chloe Smith",
      title: "dance instructor",
      review: "Club Ivy offers exceptional facial services. The ambiance is calming, and the skincare specialists are fantastic at what they do. My skin has never looked better!",
      image: "/facials/facial2.png",
    },
    {
      id: 6,
      service: "facials",
      name: "Danielle Jones",
      title: "nurse",
      review: "As a nurse, self-care is crucial, and Club Ivy's facials are my go-to solution for relaxation. The attention to detail and the quality of service are unmatched.",
      image: "/facials/facial3.png",
    },
    {
      id: 7,
      service: "nails",
      name: "Kayla Bryant",
      title: "business owner",
      review: "Club Ivy's nail services exceeded my expectations! The nail artists are incredibly skilled, and the salon's atmosphere is both inviting and relaxing.",
      image: "/nails/nails1.png",
    },
    {
      id: 8,
      service: "nails",
      name: "Megan Decker",
      title: "school teacher",
      review: "I treated myself to Club Ivy's nail services, and it was an absolute delight! The attention to detail and the range of nail designs are fantastic.",
      image: "/nails/nails2.png",
    },
    {
      id: 9,
      service: "nails",
      name: "Katie Williams",
      title: "heart surgeon",
      review: "Club Ivy's nail technicians are truly talented! Their dedication to perfection and hygiene is commendable. I'm impressed by their professionalism.",
      image: "/nails/nails3.png",
    },
    {
      id: 10,
      service: "waxing",
      name: "April McAfee",
      title: "therapist",
      review: "I've had numerous waxing sessions at Club Ivy, and I must say, their expertise shines through in every session. Clean and comfortable environment!",
      image: "/waxing/wax1.png",
    },
    {
      id: 11,
      service: "waxing",
      name: "Maria Hayes",
      title: "Biochemist",
      review: "Club Ivy's waxing services are top-notch! The staff's attention to detail and their use of quality products make the experience smooth and pleasant.",
      image: "/waxing/wax2.png",
    },
    {
      id: 12,
      service: "waxing",
      name: "Janice Lee",
      title: "Baker",
      review: "I've been a regular at Club Ivy for waxing sessions, and I'm always satisfied with the results! The staff is friendly, and hygiene is a priority.",
      image: "/waxing/wax3.png",
    },
  ];
  
  export default reviews;
  