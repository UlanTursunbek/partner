import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { Button, chakra, Checkbox } from '@chakra-ui/react'
import { EditShoppingListItem } from 'features/EditShoppingListItem'

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

export const ShoppingList = () => {
  const [items, setItems] = useState<IList[]>(list)

  const removeItem = (id: IList['id']) => {
    const filteredItems = items.filter(
      (item) => item.id !== id,
    )
    setItems(filteredItems)
  }

  return (
    <chakra.div
      display="flex"
      gap={4}
      flexDirection="column"
    >
      {items.map((item) => {
        return (
          <ShoppingListItem
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            priority={item.priority}
            removeItem={removeItem}
          />
        )
      })}
    </chakra.div>
  )
}

interface IShoppingListItemProps extends IList {
  removeItem: (id: IList['id']) => void
}

const ShoppingListItem = ({
  id,
  text,
  checked,
  priority,
  removeItem,
}: IShoppingListItemProps) => {
  return (
    <chakra.div
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgColor="blue.300"
      gap={1}
      paddingX={4}
      height={12}
    >
      <Checkbox colorScheme="red" checked={checked}>
        {text}
        {priority}
        {id}
      </Checkbox>
      <chakra.div display="flex" gap={4}>
        <EditShoppingListItem
          id={id}
          text={text}
          checked={checked}
          priority={priority}
          onEdit={() => null}
        />
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => removeItem(id)}
        >
          <AiOutlineDelete />
        </Button>
      </chakra.div>
    </chakra.div>
  )
}
