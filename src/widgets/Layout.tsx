import { ReactNode } from 'react'
import {
  Center,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'

import { Sidebar } from './Sidebar'

interface IMainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({
  children,
}: IMainLayoutProps) => {
  return (
    <Grid
      templateAreas={`"nav header"
      "nav main"`}
      gridTemplateRows={'min-content 1fr'}
      gridTemplateColumns={'256px 1fr'}
      minHeight="100vh"
      gap="1"
    >
      <GridItem p="2" bg="orange.300" area={'header'}>
        <Heading as="h1">Header will be here</Heading>
      </GridItem>
      <GridItem p="2" bg="pink.300" area={'nav'}>
        <Sidebar />
      </GridItem>
      <GridItem
        p="2"
        bg="green.300"
        area={'main'}
        borderRadius={8}
      >
        {children}
      </GridItem>
    </Grid>
  )
}
