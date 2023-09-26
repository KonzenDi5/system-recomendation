import { Route, Routes } from 'react-router-dom'

import { ForgotPassword, NotFound, SignIn, ResetPassword, SignUp, Home, Initial, Questions } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      {/* Transferir para app.routes mas precisa contruir o context, depois faço isso */}
      <Route path='/home' element={<Home />} />
      <Route path='/questions' element={<Questions />} />
    </Routes>
  )
}
