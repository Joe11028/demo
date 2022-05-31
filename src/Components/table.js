import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(productId, productName) {
  return { productId, productName };
}

const rows = [
  createData(1, 'Apple'),
  createData(4, 'banana'),
  createData(3, 'pear'),
  createData(7, 'Lychee'),
  createData(8, 'peach'),
  createData(1, 'Apple'),
  createData(4, 'banana'),
  createData(3, 'pear'),
  createData(7, 'Lychee'),
  createData(8, 'peach'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{height:360}}>
      <Table stickyHeader sx={{ minWidth: 650, height:"max-content" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product ID</TableCell>
            <TableCell align="center">Prodcut Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.productId}
              </TableCell>
              <TableCell align="center">{row.productName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
