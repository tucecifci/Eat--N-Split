import React, { useState } from "react";
import { use } from "react";

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💰 Bill Value</label>
      <input type="text"
      value={bill}
      onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👩🏻 Your Expense</label>
      <input type="text" 
      value={paidByUser}
      onChange={(e) => setPaidByUser(
        Number(e.target.value) > bill ? paidByUser : 
        Number(e.target.value))}
      />
      <label>👫 {selectedFriend.name} Expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>💸 Who is paying the bill</label>
      <select
      value={whoIsPaying}
      onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name} </option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
}

export default FormSplitBill;
