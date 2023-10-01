import { Route, Routes } from 'react-router-dom'

import { Home, NotFound, Resultado } from '../pages'

export const AppRoutes = () => {
  return (
    <>
      {/* <Sidebar /> */}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/result" element={<Resultado />} />
      </Routes>
    </>
  )
}
