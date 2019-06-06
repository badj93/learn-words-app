import React from 'react'

const {
  Provider: WordstoreServiceProvider,
  Consumer: WordstoreServiceConsumer
} = React.createContext();

export {
  WordstoreServiceConsumer,
  WordstoreServiceProvider
}
