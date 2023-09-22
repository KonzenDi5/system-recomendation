import { Route, Routes } from 'react-router-dom'

import { ForgotPassword, NotFound, SignIn, ResetPassword, SignUp } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
