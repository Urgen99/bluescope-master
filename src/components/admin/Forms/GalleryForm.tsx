"use client";
import { BASE_URL } from "@/constant/links";
import { Input } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import ImagePreview from "../ImagePreview";
const GalleryForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();
  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      setFiles(_files);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Loading");
    try {
      const formData = new FormData();
      files?.forEach((file) => {
        formData.append("images", file);
      });

      const { data } = await axios.post(`${BASE_URL}/gallery`, formData);

      if (data.success) {
        toast.success(data.message, { id });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
    } finally {
      setFiles([]);
      location.reload();
      router.push("/admin/gallery");
    }
  };

  return (
    <div className="border-2 border-[#1e1e5d] w-full h-screen flex flex-col items-center justify-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="justify-center w-full p-8 flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Select Image</label>
          <Input
            id="filled-hidden-label-small"
            type="file"
            className="mt-2"
            componentsProps={{
              input: {
                accept: "image/jpg, image/jpeg, image/png",
                multiple: true,
              },
            }}
            onChange={handleFiles}
          />
        </div>

        <button
          type="submit"
          className="text-[#1e1e5d] py-4 hover:bg-[#1e1e5d] border-2 border-[#1e1e5d] duration-300 hover:text-white font-bold transition-colors ease-linear"
        >
          Add Images
        </button>
      </form>

      {/* Preview Image */}
      <ImagePreview images={files} />
    </div>
  );
};

export default GalleryForm;
