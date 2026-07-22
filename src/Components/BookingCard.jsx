"use client"

import { authClient } from '@/lib/auth-client';
import { Alert, Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingCard = ({destination}) => {

    const {
        data: session,   
      } = authClient.useSession(); 
      const user=session?.user
      // console.log(user);

  const[departureDate,setDepartureDate]=useState(null);
  
   const {
     description,
     _id,
     imageUrl,
     price,
     destinationName,
     duration,
     country,
   } = destination;

  const handleBooking=async()=>{
    const bookingData = {
      userID: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };
     const { data: tokenData } = await authClient.token();
     console.log("booking card=>", tokenData);

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        authorization: `Bearer ${tokenData.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData.token),
    });
      const data= await res.json();
      console.log(data);
      
     toast.success("Booking successful !")
  }

  
  return (
    <Card className="rounded-none  border mt-5">
      <p className="text-sm text-muted">Starting From</p>
      <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;