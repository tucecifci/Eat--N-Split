import React from "react";

function FormSplitBill({selectedFriend}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💰 Bill Value</label>
      <input type="text" />
      <label>👩🏻 Your Expense</label>
      <input type="text" />
      <label>👫 {selectedFriend.name} Expense</label>
      <input type="text" disabled />

      <label>💸 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name} </option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
}

export default FormSplitBill;
