import AdminSidebar from "@/components/admin/AdminSidebar";
import MessageTables from "@/components/admin/Tables/MessageTables";
import { messagesTableHeads } from "@/constant/links";
import { getAllMessages } from "@/utils/feature";
import { Box } from "@mui/material";

const page = async () => {
  const { messages } = await getAllMessages();
  return (
    <section className="sm:py-12 lg:py-16 flex items-start justify-center">
      <AdminSidebar title="All Messages" />

      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 0,
          py: 3,
          width: "100%",
        }}
      >
        <MessageTables tableHeads={messagesTableHeads} tableRows={messages} />
      </Box>
    </section>
  );
};

export default page;
