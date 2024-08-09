"use client";
import { links } from "@/constant/links";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
function NavbarComponent() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav
      className={`font-inriaSerif hidden md:flex items-center py-2 justify-between md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto rounded-full fixed shadow-xl z-[20] bg-white px-3 m-auto left-0 right-0 mt-4 transition-all ease-linear duration-300 ${
        links.includes(pathname) ? "md:hidden" : ""
      }`}
    >
      <h1 className="text-2xl">Logo</h1>
      <div className="flex gap-6">
        <Link
          href="/"
          className={`${pathname == "/" ? "text-[#1e1e5d] font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`${
            pathname == "/about-us" ? "text-[#1e1e5d] font-bold" : ""
          }`}
        >
          About us
        </Link>
        <Link
          href="/verticals"
          className={`${
            pathname == "/verticals" ? "text-[#1e1e5d] font-bold" : ""
          }`}
        >
          Our verticals
        </Link>
        <Link
          href="/gallery"
          className={`${
            pathname == "/gallery" ? "text-[#1e1e5d] font-bold" : ""
          }`}
        >
          Gallery
        </Link>
        <Link
          href="/contact-us"
          className={`${
            pathname == "/contact-us" ? "text-[#1e1e5d] font-bold" : ""
          }`}
        >
          Contact us
        </Link>
      </div>
      <button
        onClick={() => router.push("/member")}
        className="bg-[#1e1e5d] text-white p-2 rounded-full px-3 none"
      >
        Become a member!
      </button>
    </nav>
  );
}

export default NavbarComponent;
