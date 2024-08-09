"use client";
import { BASE_URL } from "@/constant/links";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

enum Sector {
  agriculture = "agriculture",
  education = "education",
  logistics = "logistics",
}
interface FormType {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  street: string;
  postal_code: string;
  sector: Sector | "";
  message: string;
}
const MemberShipForm = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    postal_code: "",
    sector: "",
    message: "",
  });

  function onChangeHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    const id = toast.loading("Loading.");
    try {
      const { data } = await axios.post(`${BASE_URL}/member`, formData);

      if (data.success) {
        toast.success(data.message, { id });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
    } finally {
      clearForm();
      location.reload();
    }
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      street: "",
      postal_code: "",
      sector: "",
      message: "",
    });
  }
  return (
    <section className="flex items-center gap-[4rem] w-1/2 py-[5rem] mx-auto relative flex-wrap">
      <form onSubmit={submitHandler} className="w-full p-8 flex flex-col gap-8">
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Name*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={formData.name}
            onChange={onChangeHandler}
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Email*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={formData.email}
            onChange={onChangeHandler}
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Phone*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={formData.phone}
            onChange={onChangeHandler}
            name="phone"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Country*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={formData.country}
            onChange={onChangeHandler}
            name="country"
          />
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex-[1] flex flex-col">
            <label className="text-[#1e1e5d]">State*</label>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="outlined"
              type="text"
              className="mt-2"
              value={formData.state}
              onChange={onChangeHandler}
              name="state"
            />
          </div>
          <div className="flex-[1] flex flex-col">
            <label className="text-[#1e1e5d]">City*</label>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="outlined"
              type="text"
              className="mt-2"
              value={formData.city}
              onChange={onChangeHandler}
              name="city"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex-[1] flex flex-col">
            <label className="text-[#1e1e5d]">Street</label>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="outlined"
              type="text"
              className="mt-2"
              value={formData.street}
              onChange={onChangeHandler}
              name="street"
            />
          </div>
          <div className="flex-[1] flex flex-col">
            <label className="text-[#1e1e5d]">Postal Code*</label>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="outlined"
              type="text"
              className="mt-2"
              value={formData.postal_code}
              onChange={onChangeHandler}
              name="postal_code"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Sector*</label>
          <Select
            className="capitalize mt-2"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={onChangeHandler}
            value={formData.sector}
            name="sector"
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {Object.keys(Sector).map((sector) => (
              <MenuItem key={sector} value={sector} className="capitalize">
                {sector}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Message</label>
          <TextField
            multiline
            rows={5}
            hiddenLabel
            id="filled-hidden-label-small"
            type="text"
            className="mt-2"
            variant="outlined"
            value={formData.message}
            onChange={onChangeHandler}
            name="message"
          />
        </div>

        <button
          type="submit"
          className="text-[#1e1e5d] py-4 hover:bg-[#1e1e5d] border-2 border-[#1e1e5d] duration-300 hover:text-white font-bold transition-colors ease-linear"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default MemberShipForm;
