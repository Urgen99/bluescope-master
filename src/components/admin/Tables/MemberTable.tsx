"use client";
import { BASE_URL } from "@/constant/links";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  tableHeads: string[];
  tableRows: [
    {
      id: string;
      name: string;
      email: string;
      phone: string;
      country: string;
      state: string;
      city: string;
      street: string;
      postal_code: string;
      sector: string;
      created_at: Date;
      message: string;
    }
  ];
}

const MemberTable = ({ tableHeads, tableRows }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Loading.");

    try {
      const confirmDelete = confirm(
        "Are you sure you want to delete this member?"
      );

      if (confirmDelete) {
        const { data } = await axios.delete(`${BASE_URL}/member/${id}`);

        if (data.success) {
          toast.success(data.message, { id: toastId });
        }
      } else {
        toast.dismiss(toastId);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      location.reload();
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeads.map((column) => (
                <TableCell
                  key={column}
                  align="left"
                  style={{
                    minWidth:
                      column === "S.N." ? 50 : column === "Message" ? 350 : 150,
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map(
              (
                {
                  id,
                  name,
                  email,
                  phone,
                  country,
                  state,
                  city,
                  street,
                  postal_code,
                  sector,
                  created_at,
                  message,
                },
                index
              ) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={name}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left" className="font-semibold">
                    <Typography
                      variant="subtitle1"
                      className="text-sm leading-7 font-semibold capitalize"
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="text-sm leading-7"
                    >
                      {email}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="text-sm leading-7"
                    >
                      {phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="subtitle1"
                      className="text-sm leading-7 capitalize"
                    >{`${country}, ${state},`}</Typography>
                    <Typography
                      variant="subtitle1"
                      className="text-sm leading-7 capitalize"
                    >{`${city}, ${street}, ${postal_code},`}</Typography>
                  </TableCell>
                  <TableCell align="left" className="capitalize">
                    {sector}
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      multiline
                      rows={4}
                      aria-readonly
                      value={message}
                      className="w-full"
                    />
                  </TableCell>

                  <TableCell align="left">
                    {new Date(created_at).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(id)}>
                      <DeleteOutlinedIcon className="size-6 text-red-500" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MemberTable;
