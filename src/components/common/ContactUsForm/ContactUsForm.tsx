"use client";
import { BASE_URL } from "@/constant/links";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}
function ContactUsForm() {
  const iconContainer = `flex items-center gap-2`;
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  function changeHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    const id = toast.loading("Loading.");
    try {
      const { data } = await axios.post(`${BASE_URL}/contact-us`, formData);

      if (data.success) {
        toast.success(data.message, { id });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message, { id });
    } finally {
      clearForm();
      location.reload();
    }
  }

  return (
    <div className="flex justify-between gap-[4rem] w-[90%] py-[5rem] mx-auto relative flex-wrap">
      <div className="flex-1">
        <p className="text-sm">Contact Us</p>
        <h1 className="font-bold text-3xl text-[#1e1e5d]">
          Get In Touch With Us
        </h1>
        <p className="text-[#6C6C6C] text-sm my-2">
          {`BlueScope pvt ltd is a company that believes in investing in sectors that have the potential for growth and development. The company aims to create sustainable growth in each of these sectors by promoting best practices and delivering high-quality services.`}
        </p>
        <div className="mt-8 flex flex-col gap-8 text-start">
          <div className={`${iconContainer}`}>
            <div className="bg-[#1e1e5d] p-[0.6rem]">
              <LocationOnIcon sx={{ color: "white" }} />
            </div>
            <span>
              <p>Our Location</p>
              <p className="text-sm">Ardasha, Bhaktapur, Nepal</p>
            </span>
          </div>
          <div className={`${iconContainer}`}>
            <div className="bg-[#1e1e5d] p-[0.6rem]">
              <PhoneIcon sx={{ color: "white" }} />
            </div>
            <span>
              <p>Phone Number</p>
              <p className="text-sm">+977 9812345678</p>
            </span>
          </div>
          <div className={`${iconContainer}`}>
            <div className="bg-[#1e1e5d] p-[0.6rem]">
              <EmailIcon sx={{ color: "white" }} />
            </div>
            <span>
              <p>Email Address</p>
              <p className="text-sm">info@bluescope.com.np</p>
            </span>
          </div>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-background-texture text-white flex-1 py-[4rem] px-[2rem] flex flex-col gap-8 w-[100%]"
      >
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col flex-1">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              className="border-b-2 bg-transparent"
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              className="border-b-2 bg-transparent"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="border-b-2 bg-transparent"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            className="w-[100%] border-b-2 bg-transparent"
            name="message"
            rows={6}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="border py-4 hover:bg-white duration-500 hover:text-[#1e1e5d] font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
