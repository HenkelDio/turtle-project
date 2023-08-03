import { useState } from 'react';
import { IFieldErrors } from '../types';

export default function useErrors() {
  const [errors, setErrors] = useState<IFieldErrors[]>([]);

  function setError({ field, message }: IFieldErrors) {
    const errorAlreadyExists = errors.find((err) => err.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) => prevState.filter(
      (err) => err.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((err) => err.field === fieldName)?.message;
  }

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}