"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

    const {
      data: session,      
    } = authClient.useSession(); 
    const user=session?.user
    // console.log(user);

    const handleSignOut=async()=>{
      await authClient.signOut();
    }

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
            <Link href={"/my-bookings"}>My-Bookings</Link>{" "}
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

        <ul className="flex items-center gap-3">
          <li>
            {" "}
            <Link href={"/profile"}>Profile</Link>{" "}
          </li>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                <li>
                  {" "}
                  <Avatar>
                    <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button
                    onClick={handleSignOut}
                    variant="danger"
                    className={"rounded-none"}
                  >
                    Logout
                  </Button>
                </li>
              </div>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link href={"/login"}>Login</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/signup"}>Sign Up</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;



