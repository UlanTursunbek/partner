import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {
  chakra,
  Grid,
  GridItem,
  Icon,
  Text,
} from '@chakra-ui/react'
import { routes } from 'app/routes'
interface IList {
  id: number
  text: string
  checked: boolean
  priority: 'low' | 'regular' | 'high'
}

const list: IList[] = [
  {
    id: 1,
    text: 'first item',
    checked: false,
    priority: 'low',
  },
  {
    id: 2,
    text: 'second item',
    checked: true,
    priority: 'regular',
  },
  {
    id: 3,
    text: 'third item',
    checked: false,
    priority: 'high',
  },
]

export const ShoppingListPreview = () => {
  return (
    // <chakra.div
    //   bgColor="green.100"
    //   padding={2}
    //   borderRadius={8}
    // >
    <Grid borderRadius={8} bgColor="blue.200">
      <GridItem bgColor="red.200" padding={2}>
        <Text as="b">Last 3 tasks</Text>
      </GridItem>
      <GridItem>
        {list.map((item) => {
          return (
            <ShoppingListPreviewItem
              key={item.id}
              id={item.id}
              text={item.text}
              checked={item.checked}
              priority={item.priority}
            />
          )
        })}
      </GridItem>
      <GridItem bgColor="red.200" padding={2}>
        <Link to={routes.shoppingList}>
          <chakra.span
            display="flex"
            alignItems="center"
            gap={4}
            _hover={{
              gap: 8,
            }}
          >
            learn more... <Icon as={AiOutlineArrowRight} />
          </chakra.span>
        </Link>
      </GridItem>
    </Grid>

    // </chakra.div>
  )
}
type IShoppingListItemProps = IList

const ShoppingListPreviewItem = ({
  id,
  text,
  checked,
  priority,
}: IShoppingListItemProps) => {
  return (
    <chakra.div
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
      paddingX={4}
      height={12}
    >
      {text}
      {priority}
      {id}
    </chakra.div>
  )
}
