import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";


const DestinationCard = ({destination}) => {
    const {_id, imageUrl, price, destinationName, duration, country } = destination;
        // console.log("get destinaiotn",destination);
    return (
      <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
        <Image
          alt={destinationName}
          src={imageUrl}
          height={500}
          width={500}
          className="w-full h-64 object-cover"
        />

        <div className="p-2">
          <div className="flex gap-1 items-center">
            <FiMapPin /> <span>{country}</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{destinationName}</h1>
              <div className="flex gap-1 items-center">
                <LuCalendarDays />
                <span>{duration}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold">${price}</h3>
          </div>
          <Link href={`/destination/${_id}`}>
            {" "}
            <Button variant="ghost" className="mt-1 text-cyan-500">
              Book Now
              <LuExternalLink />
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default DestinationCard;