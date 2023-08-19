import { Route, Routes } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Main } from 'pages/Main'
import { NotFound } from 'pages/NotFound'
import { Register } from 'pages/Register'
import { ShoppingList } from 'pages/ShoppingList'
import { MainLayout } from 'widgets/Layout'

import { routes } from './routes'

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route
          path={routes.authLogin}
          element={<Login />}
        />
        <Route
          path={routes.authRegister}
          element={<Register />}
        />

        <Route path={routes.home} element={<Main />} />
        <Route
          path={routes.shoppingList}
          element={<ShoppingList />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}
