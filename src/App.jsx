import { HomePage, InvoicePage } from './pages'
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Wrapper from './components/Wrapper/Wrapper'

const App = () => {

  return (
    <Wrapper>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invoice/:id" element={<InvoicePage />} />
      </Routes>
    </Wrapper>
  )
}

export default App