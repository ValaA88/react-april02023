import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';

export default function Dictionary() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  let { search } = useParams();
  useEffect(() => {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">search another</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>something went wrong</p>
        <Link to="/dictionary">search another</Link>
      </>
    );
  }
  return (
    <div>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search Again</p>
          <DefinitionSearch />
        </>
      ) : null}
    </div>
  );
}
