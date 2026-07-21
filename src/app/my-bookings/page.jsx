import { BookingCancelAlert } from '@/Components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async() => {

  const session = await auth.api.getSession({
    headers: await headers(), 
  });
 const {id}=session?.user
//  console.log("params.id",user)
 

 const res = await fetch(`http://localhost:5000/booking/${id}`);
 const bookings=await res.json();
//  console.log("From user hote",bookings);

    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">My Booking</h1>

        <div className="space-y-5">
          {bookings.map((booking) => (
            <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                height={200}
                width={200}
                className=" object-cover h-50 "
              />
              <div>
                <h1 className="font-bold text-2xl">
                  {" "}
                  {booking.destinationName}
                </h1>
                <p>
                  {new Date(booking.departureDate).toLocaleDateString(
                    "eng-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
                <p>Booking Id : {booking._id}</p>
                <p className="text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>
                <BookingCancelAlert bookingID={booking._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyBookingPage;