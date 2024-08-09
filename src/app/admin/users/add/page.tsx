import AdminSidebar from "@/components/admin/AdminSidebar";
import AddUserForms from "@/components/admin/Forms/AddUserForms";
import { Box } from "@mui/material";
const page = () => {
  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="Add Users" />

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
        <AddUserForms />
      </Box>
    </section>
  );
};

export default page;
