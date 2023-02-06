import axios from "axios";
import React, { useState, useEffect } from "react";

function Vocab({ selectedTreasury }) {
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const id = selectedTreasury.treasury_id;
  const [vocab, setVocab] = useState({
    vocabulary: "",
    translation: "",
    treasury_id: [id],
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/vocabularys/").then((data) => {
      setGetVocabs(data.data);
    });
  }, []);

  useEffect(() => {
    let data = getVocabs
      .filter((data) => data.treasury_id[0] === selectedTreasury.treasury_id)
      .map((data) => {
        return data;
      });

    setVocabs(data);
  }, [getVocabs]);

  const addVocab = (event) => {
    event.preventDefault();

    let url = "http://127.0.0.1:8000/vocabularys/";

    axios
      .post(url, vocab)
      .then(() => {
        setVocab({
          vocabulary: "",
          translation: "",
          treasury_id: [id],
        });

        refreshPage();
      })
      .catch((err) => console.log(err));
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  //   vocabs.map((vocab) => console.log(vocab));
  console.log(vocab);

  return (
    <div>
      <div>
        <div>{selectedTreasury.treasury_title}</div>
        <div>Last played date : {selectedTreasury.treasury_date}</div>
        <div>_/10</div>
        <div>Correct</div>
      </div>
      <div>
        {vocabs.map((vocab, index) => {
          return (
            <div key={index} onClick={() => console.log(vocab.vocabulary)}>
              {index + 1}. {vocab.vocabulary} - {vocab.thai_vocab}
            </div>
          );
        })}
        <form>
          <input
            type="text"
            placeholder="Vocabulary"
            onChange={(e) => setVocab({ ...vocab, vocabulary: e.target.value })}
            value={vocab.vocabulary}
          />
          <input
            type="text"
            placeholder="Translation"
            onChange={(e) =>
              setVocab({ ...vocab, translation: e.target.value })
            }
            value={vocab.translation}
          />
        </form>
        <button onClick={addVocab}>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Vocab;
