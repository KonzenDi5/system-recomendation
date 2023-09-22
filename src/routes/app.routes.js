import { Route, Routes } from 'react-router-dom'

import { NotFound } from '../pages'

export const AppRoutes = () => {
  return (
    <>
      {/* <Sidebar /> */}

      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
