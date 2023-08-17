import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'pages/NotFound'
import { ShoppingList } from 'pages/ShoppingList'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route
        path="/shopping-list"
        element={<ShoppingList />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
