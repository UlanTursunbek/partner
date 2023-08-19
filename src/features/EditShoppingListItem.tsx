import { AiOutlineEdit } from 'react-icons/ai'
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@chakra-ui/react'

interface IEditShoppingListItemProps {
  id: number
  text: string
  checked: boolean
  priority: 'low' | 'regular' | 'high'
  onEdit: (id: number) => void
}

export const EditShoppingListItem = ({
  id,
  text,
  checked,
  priority,
  onEdit,
}: IEditShoppingListItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        colorScheme="gray"
      >
        <AiOutlineEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input defaultValue={text} />

              <FormLabel as="legend">Priority</FormLabel>
              <RadioGroup value={priority}>
                <HStack spacing="24px">
                  <Radio value="low">Low</Radio>
                  <Radio value="regular">Regular</Radio>
                  <Radio value="high">High</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button variant="ghost">Save </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
