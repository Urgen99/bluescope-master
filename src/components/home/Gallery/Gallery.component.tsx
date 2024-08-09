"use client";
/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";

interface Props {
  fromGallery: Boolean;
  images: [{ url: string }];
}

function GalleryComponent({ fromGallery = false, images }: Props) {
  return (
    <section className="w-[90vw] mx-auto font-inriaSerif">
      {fromGallery == false && (
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-[#1e1e5d]">Gallery</h1>
          <Link href="/gallery">
            <button className="text-white bg-[#1e1e5d] px-4 py-1 rounded-full w-fit">
              View All
            </button>
          </Link>
        </div>
      )}
      <Box sx={{ width: "100%" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images &&
            images.map(({ url }) => (
              <Link href={url} target="_blank" key={url}>
                <ImageListItem>
                  <img
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${url}?w=248&fit=crop&auto=format`}
                    alt={url + " image"}
                    loading="lazy"
                  />
                </ImageListItem>
              </Link>
            ))}
        </ImageList>
      </Box>
    </section>
  );
}

export default GalleryComponent;
