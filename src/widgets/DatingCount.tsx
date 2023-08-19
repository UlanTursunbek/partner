import { chakra, Heading } from '@chakra-ui/react'

export const DatingCount = () => {
  return (
    <chakra.div
      height={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="4px solid red"
      borderRadius={4}
      bgColor="blue.500"
    >
      <Heading as="h2">You are dating for 80 days</Heading>
    </chakra.div>
  )
}
