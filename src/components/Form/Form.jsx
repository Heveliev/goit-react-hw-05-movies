import { Searchbar, SearchForm, SearchFormButton, ButtonLabel, Input } from "./Form.styled";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

       const handleSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      Notify.info('Enter a value in the input field');
   return
    }
           onSubmit(value);
   setValue('');
}

    const handleInputChange = evt => {
  setValue( evt.currentTarget.value.toLowerCase())
    }


    return (
        <>
            <Searchbar >
            <SearchForm
                onSubmit={handleSubmit}
            >
    <SearchFormButton type="submit">
      <ButtonLabel>Search</ButtonLabel>
    </SearchFormButton>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search films"
      value={value}
      onChange={handleInputChange}
    />
      </SearchForm>
      </Searchbar>
        </>
    )
}