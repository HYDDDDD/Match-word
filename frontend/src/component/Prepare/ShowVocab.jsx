import React, { useState, useEffect } from "react";

<<<<<<< HEAD
function ShowVocab({ seletedTreasury }) {
  console.log(seletedTreasury.treasury_title);
=======
function ShowVocab({ selectedTreasury }) {
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);

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

  // console.log(vocabs);

>>>>>>> f6a134eccf02194e8422f1f996b72eadcbfc3b51
  return (
    <div>
      <div>
        <div>{seletedTreasury.treasury_title}</div>
        <div>Last played date : {seletedTreasury.treasury_date}</div>
        <div>{seletedTreasury.total_vocab} Word</div>
        <div>Edit</div>
      </div>
      <div>
        {vocabs.map((vocab, index) => {
          return (
            <div key={index}>
              {index + 1}. {vocab.vocabulary} - {vocab.thai_vocab}
            </div>
          );
        })}
        <button>GO to Play</button>
      </div>
    </div>
  );
}

export default ShowVocab;
