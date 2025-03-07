import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 text-gray-700 font-semibold">{user?.name}</h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div onClick={handleLogOut} className="footer_image text-red-500">
        <FiLogOut size={20} />
      </div>
    </footer>
  );
};

export default Footer;

// user0@gmail.com
// user12345
