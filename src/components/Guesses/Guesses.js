import React, { useState, useContext } from 'react';
import { GuessesContext } from '../../providers/GuessesProvider';

import Container from '@material-ui/core/Container';

const Guesses = () => {
  const [guesses, setGuesses] = useContext(GuessesContext);

  return (
    <Container>
      {!!guesses &&
        guesses.map((guess) => {
          return (
            <div key={guess.id}>
              <div>{guess.email}</div>
              <div>
                {guess.firstName} {guess.lastName}
              </div>
              <div>{guess.hairColor}</div>
            </div>
          );
        })}
    </Container>
  );
};

export default Guesses;
