import { Link } from 'react-router-dom'
import {
  Avatar,
  chakra,
  Divider,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'

interface ISidebarProps {
  //   children: ReactNode
}

import { routes } from 'app/routes'
import { LogoutButton } from 'features/LogoutButton'
import { color } from 'framer-motion'

export const Sidebar = ({}: ISidebarProps) => {
  return (
    <Grid
      // templateAreas={`"nav header"
      // "nav main"`}
      gridTemplateRows={'min-content 1fr min-content'}
      // gridTemplateColumns={'256px 1fr'}
      // minHeight="100vh"
      gap="4"
      height="100%"
    >
      <GridItem
        display="grid"
        justifyContent="center"
        my={8}
      >
        <Avatar
          size="xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Text>Hello, Dan Abranov</Text>
      </GridItem>
      <GridItem>
        <Divider />
        <chakra.nav display="grid" mt={8}>
          <chakra.ul display="grid" gap={2}>
            <Link to={routes.home}>
              <chakra.li
                p={2}
                bg="green.500"
                borderRadius={4}
                _hover={{ opacity: 0.8 }}
                _focus={{ boxShadow: 'outline' }}
              >
                Home
              </chakra.li>
            </Link>
            <Link to={routes.shoppingList}>
              <chakra.li
                p={2}
                bg="green.500"
                borderRadius={4}
                _hover={{ opacity: 0.8 }}
                _focus={{ boxShadow: 'outline' }}
              >
                Shopping list
              </chakra.li>
            </Link>
          </chakra.ul>
        </chakra.nav>
      </GridItem>
      <GridItem>
        <LogoutButton />
      </GridItem>
    </Grid>
  )
}
