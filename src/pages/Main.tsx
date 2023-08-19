import { Grid, GridItem } from '@chakra-ui/react'
import { DatingCount } from 'widgets/DatingCount'
import { ShoppingListPreview } from 'widgets/ShoppingListPreview'
export const Main = () => {
  return (
    <Grid gap={2}>
      <GridItem>
        <DatingCount />
      </GridItem>
      <Grid gridTemplateColumns={'1fr 1fr'} gap={2}>
        <GridItem>
          <ShoppingListPreview />
        </GridItem>

        <GridItem>
          <div>some block here</div>
        </GridItem>
      </Grid>
    </Grid>
  )
}
