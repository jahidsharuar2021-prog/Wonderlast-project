import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between max-w-7xl mx-auto bg-white py-5 ">
        <ul className="flex items-center gap-3">
          <li className="text-cyan-500 py-2 px-4">
            {" "}
            <Link href={""}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/destination"}>Destinations</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/my-booking"}>My-Bookings</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/admin"}>Admin</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/add-destination"}>Add Destination</Link>{" "}
          </li>
        </ul>

        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            width={150}
            height={150}
            alt="logo"
          ></Image>
        </div>

        <ul className="flex  gap-3">
          <li>
            {" "}
            <Link href={"/profile"}>Profile</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/login"}>Login</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/signup"}>Sign Up</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;



