import AdminSidebar from "@/components/admin/AdminSidebar";
import ReviewTable from "@/components/admin/Tables/ReviewTable";
import { reviewTableHeads } from "@/constant/links";
import { getReviews } from "@/utils/feature";
import { Box } from "@mui/material";

const page = async () => {
  const { reviews } = await getReviews();

  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="All Reviews" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
      >
        <ReviewTable tableHeads={reviewTableHeads} tableRows={reviews} />
      </Box>
    </section>
  );
};

export default page;
