import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vocab({ selectedTreasury }) {
  // console.log(selectedTreasury.treasury_id);
  const navigate = useNavigate();
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [id, setId] = useState();
  const [vocab, setVocab] = useState({
    vocabulary: "",
    translation: "",
    treasury_id: [selectedTreasury.treasury_id],
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
        // setId(selectedTreasury.treasury_id);
        return data;
      });

    setVocabs(data);
  }, [getVocabs]);

  const addVocab = async () => {
    let url = "http://127.0.0.1:8000/vocabularys/";

    await axios
      .post(url, vocab, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(() => {
        setVocab({
          vocabulary: "",
          translation: "",
          treasury_id: [],
        });

        navigate("/prepare");
      })
      .catch((err) => console.log(err));
  };

  const deleteVocab = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/vocabularys/${id}`)
      .then(() => refreshPage());
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  //   vocabs.map((vocab) => console.log(vocab));
  console.log(vocab);
  console.log(vocab.treasury_id);
  // console.log(id);

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
            <div key={index} onClick={() => setId(vocab.vocabulary_id)}>
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
        <button
          onClick={() => {
            setVocab({ ...vocab, treasury_id: selectedTreasury.treasury_id });
            addVocab();
          }}
        >
          Add
        </button>
        <button onClick={() => deleteVocab(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Vocab;