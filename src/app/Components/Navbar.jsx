import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between max-w-7xl mx-auto bg-white py-5">
        <ul className="flex  gap-3">
          <li>
            {" "}
            <Link href={""}>Homepage</Link>{" "}
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



