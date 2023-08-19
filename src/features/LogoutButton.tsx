import { AiOutlineLogout } from 'react-icons/ai'
import { Button, Icon, Text } from '@chakra-ui/react'

export const LogoutButton = () => {
  return (
    <Button
      display="flex"
      gap={4}
      width="100%"
      colorScheme="red"
      variant="outline"
      _hover={{
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <Icon as={AiOutlineLogout} />
      <Text>Logout will be here</Text>
    </Button>
  )
}
