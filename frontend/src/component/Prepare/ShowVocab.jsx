import React, { useState, useEffect } from "react";

function ShowVocab({ seletedTreasury }) {
  console.log(seletedTreasury.treasury_title);
  return (
    <div>
      <div>
        <div>{seletedTreasury.treasury_title}</div>
        <div>Last played date : {seletedTreasury.treasury_date}</div>
        <div>{seletedTreasury.total_vocab} Word</div>
        <div>Edit</div>
      </div>
      <div></div>
    </div>
  );
}

export default ShowVocab;
