import React from 'react'
import { WordstoreServiceConsumer } from "../wordstore-service-context/wordstore-service-context"

const withWordstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <WordstoreServiceConsumer>
        {
          (wordstoreService) => {
            return (
              <Wrapped {...props} wordstoreService={ wordstoreService }/>
            );
          }
        }
      </WordstoreServiceConsumer>
    );
  }
};

export default withWordstoreService;
