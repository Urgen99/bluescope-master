import AdminSidebar from "@/components/admin/AdminSidebar";
import UserTables from "@/components/admin/Tables/UserTables";
import { userTableHeads } from "@/constant/links";
import { getUsers } from "@/utils/feature";
import { Box } from "@mui/material";

const page = async () => {
  const { users } = await getUsers();
  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="All Users" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
      >
        <UserTables tableHeads={userTableHeads} tableRows={users} />
      </Box>
    </section>
  );
};

export default page;
