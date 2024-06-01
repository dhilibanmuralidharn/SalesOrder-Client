import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
  Tabs, TabList, TabPanels, Tab, TabPanel, } from '@chakra-ui/react';
import Select from 'react-select';
import './Home.css'
import SaleOrderItem from '../saleOrderItem/SaleOrderItem'
import CompleteSalesOrder from '../completeSalesOrder/CompleteSalesOrder' 
import ModalForm from '../modal/ModalForm'


const productOptions = [
  { value: 1, label: 'Stocked Product I' },
  { value: 2, label: 'Benoit Saint Denis' },
  { value: 3, label: 'Anonymous Product' },
  { value: 4, label: 'Stocked Tea I' },
  { value: 5, label: 'Stocked Tea II' },
  { value: 6, label: 'Product 5' },
  { value: 7, label: 'Product 22' },

];

const Home = (props) => {
  const {combinedData} = props
  const [selectedProducts, SetSelectedProducts] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentorder, setCurrentOrder] = useState(null)
  const [readOnly, setReadOnly] = useState(false)

  const handleProductChange = (selectedOptions) => {
    SetSelectedProducts(selectedOptions)
  }

  const handleOpenModal = (order, readOnly) => {
    setCurrentOrder(order)
    setReadOnly(readOnly)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentOrder(null)
  }

  return (
    <ChakraProvider>
      <Box p={5} width={800}>
        <Tabs>
          <TabList>
            <Tab>Active Sale Orders</Tab>
            <Tab>Completed Sale Order</Tab>
            <Tab>+ Sale Order</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TableContainer>
              <Table className="table">
                <Thead style={{marginTop:'1px'}}>
                  <Tr>
                    <Th scope="col" className='table-column-heading'>ID</Th>
                    <Th scope="col" className='table-column-heading'>Customer Name</Th>
                    <Th scope="col" className='table-column-heading'>Price <i class="fas fa-rupee-sign"></i></Th>
                    <Th scope="col" className='table-column-heading'>Last Modified</Th>
                    <Th scope="col" className='table-column-heading'>Edit/View</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {combinedData.map((data, index) =>(
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{data.CustomerName}</Td>
                      <Td>{data.Price}</Td>
                      <Td>{data.LastModified}</Td>
                      <Td><button className='button' onClick={() => handleOpenModal(data, true)}>...</button></Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              </TableContainer>
              
            </TabPanel>
            <TabPanel>
              <CompleteSalesOrder />
            </TabPanel>
            <TabPanel>
              <Select isMulti 
                options={productOptions}
                value={selectedProducts}
                onChange={handleProductChange}
                placeholder="Select a product..."
              />
              <SaleOrderItem/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>      
      <ModalForm 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={currentorder}
        readOnly={readOnly}
      />
    </ChakraProvider>
    
  )
}

export default Home