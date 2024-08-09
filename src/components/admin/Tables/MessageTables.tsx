"use client";
import { TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, useState } from "react";

interface Props {
  tableHeads: string[];
  tableRows: [
    {
      first_name: string;
      last_name: string;
      email: string;
      message: string;
      created_at: Date;
    }
  ];
}

const MessageTables = ({ tableHeads, tableRows }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {tableRows && tableRows.length > 0 ? (
        <>
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
                          column === "S.N."
                            ? 50
                            : column === "Message"
                            ? 350
                            : 150,
                      }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows &&
                  tableRows.map(
                    (
                      { first_name, last_name, email, message, created_at },
                      index
                    ) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={first_name}
                      >
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">{`${first_name} ${last_name}`}</TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell aria-readonly align="left">
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
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableRows && tableRows.length > 0 ? tableRows.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Typography variant="h6" className="p-8 text-center">
          No messages
        </Typography>
      )}
    </Paper>
  );
};

export default MessageTables;
