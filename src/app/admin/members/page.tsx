import AdminSidebar from "@/components/admin/AdminSidebar";
import MemberTable from "@/components/admin/Tables/MemberTable";
import { membersTableHeads } from "@/constant/links";
import { getAllMembers } from "@/utils/feature";
import { Box } from "@mui/material";

const page = async () => {
  const { members } = await getAllMembers();

  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="All Members" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
      >
        <MemberTable tableHeads={membersTableHeads} tableRows={members} />
      </Box>
    </section>
  );
};

export default page;
