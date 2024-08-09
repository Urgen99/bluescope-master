import AdminSidebar from "@/components/admin/AdminSidebar";
import Gallery from "@/components/admin/Gallery";
import { fetchAllGallery } from "@/utils/feature";
import { Box } from "@mui/material";

const page = async () => {
  const { images } = await fetchAllGallery();

  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="All Images" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
      >
        <Gallery images={images} />
      </Box>
    </section>
  );
};

export default page;
