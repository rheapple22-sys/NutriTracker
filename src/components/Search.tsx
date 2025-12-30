
import React, {useState } from 'react';
import useDebounceSearch from './customDebounce';


function Search() {
  const sentences = [
    "The sun is shining",
    "The moon is perfect",
    "Time and Tide wait for none",
    "Beat the bush"
    ]
    const users = [
      {
        name: 'Alex', 
        age:40
      }, 
      {
        name: 'Bob',
        age:50
      }, 
      {
        name:'Jack',
        age:89
      }];

  const [input, setInput] = useState("");
  const results = useDebounceSearch(sentences, input, 400);
  const userResults = useDebounceSearch(users.map(u => u.name), input, 500);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  } 
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
      <div>
        <label htmlFor="searchSentence">Search Sentence: </label>
        <input id="searchSentence" type="text" onChange={handleSearch} />
        <br />
        <ul>
          {results.map((sentence, idx) => (
            <li key={idx}>{sentence}</li>
          ))}
          
        </ul>
        <ul>
          {
            userResults.map((user, index) => (
              <li key={index}>{user}</li>
            ))
          }
        </ul>
      </div> 
    </div>
  )
}

export default Search
