"use client";
import { BASE_URL } from "@/constant/links";
import { Input, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import ImagePreview from "../ImagePreview";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState("");
  const [avatar, setAvatar] = useState<File[]>([]);
  const router = useRouter();
  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      setAvatar(_files);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Loading");
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("reviews", reviews);
      formData.append("avatar", avatar[0]);

      const { data } = await axios.post(`${BASE_URL}/reviews`, formData);

      if (data.success) {
        toast.success(data.message, {
          id,
        });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
    } finally {
      clearForm();
      location.reload();
      router.push("/admin/reviews");
    }
  };

  function clearForm() {
    setName("");
    setReviews("");
    setAvatar([]);
  }

  return (
    <div className="border-2 border-[#1e1e5d] w-1/2 h-fit flex flex-col items-center justify-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="justify-center w-full p-8 flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Name*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Reviews*</label>
          <TextField
            multiline
            rows={5}
            hiddenLabel
            id="filled-hidden-label-small"
            type="text"
            className="mt-2"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
            variant="outlined"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Select Image</label>
          <Input
            id="filled-hidden-label-small"
            type="file"
            className="mt-2"
            componentsProps={{
              input: { accept: "image/jpg, image/jpeg, image/png" },
            }}
            onChange={handleFiles}
          />
        </div>

        <button
          type="submit"
          className="text-[#1e1e5d] py-4 hover:bg-[#1e1e5d] border-2 border-[#1e1e5d] duration-300 hover:text-white font-bold transition-colors ease-linear"
        >
          Submit Review
        </button>
      </form>

      {/* Preview Image */}
      <ImagePreview images={avatar} />
    </div>
  );
};

export default ReviewForm;
