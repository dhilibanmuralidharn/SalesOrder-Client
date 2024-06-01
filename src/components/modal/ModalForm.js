import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import './ModalForm.css'

const ModalForm = (props) => {
  const {isOpen, onClose, order, readOnly} = props
  if (!order){
    return null
  }
  return (
    
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
          <ModalHeader>{readOnly ? "ViewOrder" : "EditOrder"}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl>
              <FormLabel>Customer Name</FormLabel>
              <Input value={order.CustomerName} isReadOnly={readOnly} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input value={order.Price} isReadOnly={readOnly} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Modified</FormLabel>
              <Input value={order.LastModified} isReadOnly={readOnly} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
            {!readOnly && <Button variant="ghost">Save</Button>}
          </ModalFooter>
          </ModalContent>
      </Modal>

  )
}

export default ModalForm