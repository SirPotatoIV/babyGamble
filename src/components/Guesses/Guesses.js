import React from 'react';

import Container from '@material-ui/core/Container';

const Guesses = ({ guesses }) => {
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
