import AdminSidebar from "@/components/admin/AdminSidebar";
import GalleryForm from "@/components/admin/Forms/GalleryForm";
import ReviewForm from "@/components/admin/Forms/ReviewForm";
import { Box } from "@mui/material";
const page = () => {
  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="Add Images" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
        className="flex items-center justify-center"
      >
        <GalleryForm />
      </Box>
    </section>
  );
};

export default page;
