import React, { useState } from 'react'
import styled from 'styled-components'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';

import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import { graphql, useStaticQuery } from 'gatsby';

const Products = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
`

const columns = [
  { id: 'index', label: 'Item Number', minWidth: 50 },
  { id: 'product', label: 'Product Name', minWidth: 170 },
  { id: 'pack_size', label: 'Pack Size', minWidth: 200 },
];
const Product = () => {
  const productList = useStaticQuery(graphql`
    query {
        dataJson {
          Ajanta {
            product
            pack_size
          }
          Denk {
            product
            pack_size
          }
          Sandoz {
            product
            pack_size
          }
        }
      }
      `);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  var productItems = [];
  Object.keys(productList.dataJson).forEach(function (key) {
    productList.dataJson[key].forEach(function (item) { productItems.push(item); })
  });

  var companyNames = [];
  Object.keys(productList.dataJson).forEach(function (key) {
    companyNames.push(key);
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [filterName, setFilterName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setCopyList(productItems);
    filterBrands(value);
  };

  const [searchVal, setSearched] = useState("")
  const [copyList, setCopyList] = useState(productItems)


  const requestSearch = (searched) => {
    if (searched.length === 0) {
      setSearched("")
      console.log(filterName)
      filterBrands(filterName)
    } else {
      setSearched(searched)
      setCopyList(copyList.filter((row) => row.product.toLowerCase().includes(searched.toLowerCase())))
    }
  }

  const filterBrands = (brands) => {
    if (brands.length === 0) {
      setCopyList(productItems);
    } else {
      var totalFilter = []
      brands.forEach((company) => totalFilter.push(...productItems.filter((row) => row.product.toLowerCase().includes(company.toLowerCase()))));
      setCopyList(totalFilter);
    }
  };


  return (
    <Products id="product">
      <h1>Inventory</h1>
      <Paper sx={{ width: '100%', overflow: 'hidden', filterSelectedOptions: true }}>
        <TableContainer sx={{ maxHeight: 680 }}>
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
              top: 0,
              left: 0,
              height: 5,
              position: "static"
            }}
          >

            <TextField
              variant='outlined'
              placeholder='search...'
              type='search'
              onChange={(e) => requestSearch(e.target.value)}
              size="small"
              sx={{ width: "100%" }}
            />
            <Tooltip title="Filters">
              <IconButton>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-multiple-checkbox-label">Filter</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filterName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}

                  >
                    {companyNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={filterName.indexOf(name) > -1} disabled={searchVal > 0 ? true : false} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </IconButton>
            </Tooltip>
          </Toolbar>

          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(copyList)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        row["index"] = (index + 1) + rowsPerPage * page;
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100, { value: -1, label: 'All' }]}
          component="div"
          count={copyList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <p>
        If the product you are looking for is not our list, please reach out to us via call or email us to discuss further options.

      </p>
    </Products>
  )
};

export default Product;