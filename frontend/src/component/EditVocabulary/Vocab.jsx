import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditVocab.css";

function Vocab({ selectedTreasury }) {
  const navigate = useNavigate();
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [id, setId] = useState();
  const [vocab, setVocab] = useState({
    vocabulary: "",
    thai_vocab: "",
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
        return data;
      });

    setVocabs(data);
  }, [getVocabs, selectedTreasury.treasury_id]);

  const addVocab = async () => {
    let url = "http://127.0.0.1:8000/vocabularys/";

    await axios
      .post(url, vocab)
      .then(() => {
        setVocab({
          vocabulary: "",
          thai_vocab: "",
          treasury_id: [selectedTreasury.treasury_id],
        });
        navigate("/prepare");
      })
      .catch((err) => console.log(err));
  };
  console.log(selectedTreasury.treasury_id);
  const deleteVocab = (id) => {
    console.log(id);
    axios.delete(`http://127.0.0.1:8000/vocabularys/${id}`).then(() => {
      navigate("/prepare");
    });
  };

  console.log(vocab);

  return (
    <>
      <div className="details-boxframe">
        <div className="editVo-boxbig"></div>
        <div className="photo-editVo"></div>
        <div id="name-editVo">{selectedTreasury.treasury_title}</div>
        <div id="date-editVo">
          Last played date : {selectedTreasury.treasury_date}
        </div>
        <div id="boxword-EditVo">
          <div id="numberword-one">_/10</div>
          <div id="correct-EditVo">Correct</div>
        </div>

        <div>
          <div className="editVo-boxsmall">
            {vocabs.map((vocab, index) => {
              return (
                <div
                  className="edit-vocadtran"
                  key={index}
                  onClick={() => setId(vocab.vocabulary_id)}
                >
                  {index + 1}. {vocab.vocabulary} - {vocab.thai_vocab}
                </div>
              );
            })}
          </div>
          <div>
            <form id="farme-VocadTranlation">
              <input
                id="puttext"
                type="text"
                placeholder="Vocabulary"
                onChange={(e) =>
                  setVocab({ ...vocab, vocabulary: e.target.value })
                }
                value={vocab.vocabulary}
              />
              <input
                id="puttext"
                type="text"
                placeholder="Translation"
                onChange={(e) =>
                  setVocab({ ...vocab, thai_vocab: e.target.value })
                }
                value={vocab.thai_vocab}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="detil-AddDelete">
        <div>
          <button
            className="btnAdd"
            onClick={() => {
              setVocab({
                ...vocab,
                treasury_id: selectedTreasury.treasury_id,
              });
              addVocab();
            }}
          >
            Add
          </button>
        </div>
        <div>
          <button className="btndelete" onClick={() => deleteVocab(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Vocab;
