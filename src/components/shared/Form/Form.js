import React, { Fragment } from 'react';

import { useForm } from '@mantine/form';

const Form = () => {
  const form = useForm({
    initialValues: {
      senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      clientName: '',
      clientEmail: '',
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      createdAt: new Date(),
      paymentTerms: '30',
      description: '',
      items: [],
    },
  });


  return (
    <Fragment>
      <h3>Edit a invoice</h3>
      <form>
    </form>
    </Fragment>
  )
};


export default Form;