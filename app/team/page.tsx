// page for employees
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/hero/Cover';
import Banner from '@/components/misc/Banner';
import MassageAvatar from '@/components/massages/MassageAvatar';
import Avatar from '@/components/facials/Avatar';
import TreatmentsAvatar from '@/components/bodyTreatments/TreatmentsAvatar';
import WaxAvatar from '@/components/waxing-treatments/WaxAvatar';
import OwnerAvatar from '@/components/owners/OwnerAvatar';
// misc imports
import Details from '@/components/misc/Details';
import Reviews from '@/components/misc/Reviews';
import Footer from '@/components/misc/Footer';


type Owners = {
  _id: number;
  title: string;
  name: string;
  email: string;
  phone: string;
  experience: string; 
  bio: string;
  photo: string;
  image: string;
  image2: string; 
}


type Massages = {
  _id: number;
  service: string;
  title: string;
  name: string;
  email: string;
  photo: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
};

type Facials = {
  _id: number;
  service: string;
  title: string;
  name: string;
  email: string;
  photo: string;
  price: string;
  price2: string;
  image: string;
};


type Treatments = {
  _id: number;
  service: string;
  title: string;
  name: string;
  email: string;
  photo: string;
  price: string;
  image: string;
};

type Waxings = {
  _id: number;
  service: string;
  title: string;
  name: string;
  email: string;
  photo: string;
  price: string;
  image: string;
};

function Team() {
  const [massages, setMassages] = useState<Massages[]>([]);
  const [facials, setFacials] = useState<Facials[]>([]);
  const [treatments, setTreatments] = useState<Treatments[]>([]);
  const [waxings, setWaxings] = useState<Waxings[]>([]);
  const [owners, setOwners] = useState<Owners[]>([]);
  
  
  // owners useEffect
  useEffect(() => {
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/owners')
      .then((response) => {
        setOwners(response.data);
      })
      .catch((error) => {
        console.error('Error fetching owners:', error);
      });
  }, []);
  
  // facial useEffect
  useEffect(() => {
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/facials')
      .then((response) => {
        setFacials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching facials:', error);
      });
  }, []);


  // massage useEffect
  useEffect(() => {
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/massages')
      .then((response) => {
        setMassages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching massages:', error);
      });
  }, []);

  // body-treatments useEffect  
  useEffect(() => {   
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/body-treatments')
      .then((response) => {
        setTreatments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching body-treatments:', error);
      });
  }, []);

  // waxing-treatments useEffect
  useEffect(() => {
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/waxing-treatments')
      .then((response) => {
        setWaxings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching body-treatments:', error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="layout mt-3 h-100">
        <Cover />
        <Banner />
        <div className="container px-4 py-5">
          <h1 className=" text-center py-5 my-5">Owners</h1>
          <div className="row row-cols-lg-5 justify-content-center gy-3 mb-4">
            {owners.map((owners) => (
              <div key={owners._id} className="col py-3">
                <OwnerAvatar owners={owners} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Our massage specialist</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {massages.map((massages) => (
              <div key={massages._id} className="pt-4 ">
                <MassageAvatar massages={massages} />
              </div>
            ))}
          </div>

          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Skin care team</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {facials.map((facials) => (
              <div key={facials._id} className="pt-4 ">
                <Avatar facials={facials} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Body Treatments</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {treatments.map((treatments) => (
              <div key={treatments._id} className="pt-4 ">
                <TreatmentsAvatar treatments={treatments} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Waxing</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {waxings.map((waxings) => (
              <div key={waxings._id} className="pt-4 ">
                <WaxAvatar waxings={waxings} />
              </div>
            ))}
          </div>
          <h1 className=" text-center py-5 my-5">Reviews</h1>
          <div className="mt-1 py-4">
            <Reviews />
          </div>
        </div>
        <div className="mt-1 py-4">
          <Details />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;
