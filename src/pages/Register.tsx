import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(
                        (showPassword) => !showPassword,
                      )
                    }
                  >
                    {showPassword ? (
                      <ViewIcon />
                    ) : (
                      <ViewOffIcon />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
