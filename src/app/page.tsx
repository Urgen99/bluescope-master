import AboutUsComponent from "@/components/home/AboutUs/AboutUs.component";
import CarouselComponent from "@/components/home/Carousel/Carousel.component";
import CompanyDescriptionComponent from "@/components/home/CompanyDescription/CompanyDescription.component";
import GalleryComponent from "@/components/home/Gallery/Gallery.component";
import SubgroupComponent from "@/components/home/SubGroup/Subgroup.component";
import TestimonialsComponent from "@/components/home/Testimonials/Testimonials.component";
import { fetchAllGallery, getReviews } from "@/utils/feature";

export default async function Home() {
  const { images } = await fetchAllGallery();
  const { reviews } = await getReviews();
  return (
    <main className="w-[100%] ">
      <section className="h-[100vh] w-[100%] relative">
        <CarouselComponent />
      </section>
      <AboutUsComponent />
      <CompanyDescriptionComponent />
      <div className="py-10">
        <GalleryComponent fromGallery={false} images={images.slice(0, 5)} />
      </div>
      <SubgroupComponent />
      <TestimonialsComponent reviews={reviews} />
    </main>
  );
}
