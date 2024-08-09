import GalleryComponent from "@/components/home/Gallery/Gallery.component";
import { fetchAllGallery } from "@/utils/feature";

async function page() {
  const { images } = await fetchAllGallery();

  return (
    <section className="py-10 md:py-20 md:pt-40">
      <GalleryComponent fromGallery={true} images={images} />
    </section>
  );
}

export default page;
