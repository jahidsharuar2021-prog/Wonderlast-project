import BookingCard from "@/Components/BookingCard";
import { DeleteAlert } from "@/Components/DeleteAlert";
import { EditModal } from "@/Components/EditModal";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";


const DestinationDetailsPage = async({params}) => {
    const {id}=await params;
    
    const token=await auth.api.getToken({
      headers:await headers()
    
    })
    console.log("destination page=>",token)
     
      const res = await fetch(`http://localhost:5000/destination/${id}`,
        {
          headers:{
            authorization:`Bearer ${token.token}`
          }
        }
      );
      const destination= await res.json() 
      const {
        description,
        _id,
        imageUrl,
        price,
        destinationName,
        duration,
        country,
      } = destination;         

    return (
      <div className="max-w-7xl mx-auto mt-3">
        <div className="flex justify-end gap-3 items-center">
          <EditModal destination={destination}></EditModal>
          <DeleteAlert destination={destination}></DeleteAlert>
        </div>

        <div className="border border-gray-200 rounded-xl shadow:md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
          <Image
            alt={destinationName}
            src={imageUrl}
            height={500}
            width={800}
            className="h-100 object-cover "
          ></Image>

          <div className="flex justify-between">
            <div className="p-2">
              <div className="flex gap-1 items-center">
                <FiMapPin /> <span>{country}</span>
              </div>
              <div className="">
                <div>
                  <h1 className="text-xl font-bold">{destinationName}</h1>
                  <div className="flex gap-1 items-center">
                    <LuCalendarDays />
                    <span>{duration}</span>
                  </div>
                </div>
              </div>
              <h1 className="mt-10 text-2xl font-bold">Overview</h1>
              <p>{description}</p>
            </div>
            <BookingCard destination={destination}></BookingCard>
          </div>
        </div>
      </div>
    );
};

export default DestinationDetailsPage;