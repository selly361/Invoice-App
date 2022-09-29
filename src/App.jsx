import { HomePage, InvoicePage } from './pages'
import React, { Fragment, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Wrapper from './components/Wrapper/Wrapper'
import { InvoiceContextProvider } from './context/InvoiceProvider'

const App = () => {
  const { invoices, handleMarkPaid } = useContext(InvoiceContextProvider)
  return (
    <Wrapper>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invoice/:id" element={<InvoicePage invoices={invoices} handleMarkPaid={handleMarkPaid} />} />
      </Routes>
    </Wrapper>
  )
}

export default App