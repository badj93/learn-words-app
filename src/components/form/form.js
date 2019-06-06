import React from 'react'
import InputWords from '../input-words/input-word'
import Button from '../button/button'

const Form = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form>
          <InputWords
            labelText="Добавить слово в базу на английском"
            placeholder="Введите слово"
            descInput="Можно ввести слово/словосочетание/предложение"
            idName="input1"
            classTitle="form-control"
          />
          <InputWords
            labelText="Введите перевод слова на русском"
            placeholder="Введите перевод"
            descInput="Перевод можно вводить через запятую"
            idName="input2"
            classTitle="form-control"
          />
          <Button
            classTitle="btn btn-primary"
            title="Добавить"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
