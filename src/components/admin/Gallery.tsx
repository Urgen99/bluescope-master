"use client";
/* eslint-disable @next/next/no-img-element */
import { BASE_URL } from "@/constant/links";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton, ImageListItemBar } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import toast from "react-hot-toast";
interface Props {
  images: [
    {
      id: string;
      url: string;
      created_at: Date;
    }
  ];
}
const Gallery = ({ images }: Props) => {
  const deleteHandler = async (id: string) => {
    const toastId = toast.loading("Loading.");

    try {
      const confirmDelete = confirm(
        "Are you sure you want to delete this image?"
      );

      if (confirmDelete) {
        const { data } = await axios.delete(`${BASE_URL}/gallery/${id}`);

        if (data.success) {
          toast.success(data.message, { id: toastId });
        }
      } else {
        toast.dismiss(toastId);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      location.reload();
    }
  };

  return (
    <section className="px-4 w-full mx-auto font-inriaSerif">
      <ImageList>
        {images &&
          images.map(({ id, url, created_at }) => (
            <ImageListItem key={url}>
              <img
                srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${url}?w=248&fit=crop&auto=format`}
                alt={`${url} - image`}
                loading="lazy"
              />

              <ImageListItemBar
                title={
                  <p>
                    Added on -{" "}
                    <i>{new Date(created_at).toLocaleDateString()}</i>
                  </p>
                }
                className="py-2 px-4"
                actionIcon={
                  <IconButton
                    onClick={() => deleteHandler(id)}
                    className="bg-white text-red-500 hover:bg-red-500 hover:text-white transition-colors ease-linear duration-300"
                  >
                    <DeleteOutlinedIcon className="size-6 " />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </section>
  );
};

export default Gallery;
