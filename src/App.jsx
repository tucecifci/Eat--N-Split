import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormaddFriend";
import FormSplitBill from "./FormSplitBill";
import { use } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false); //false olduğu için tablo gözükmüyor
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null); //bunu null diye tanımladık çünkü ilk etapta seçilen bir friend yok

  function handleShowAddFriend() {
    //add friend butonuna basınca tabloyu göstermesi için
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); //arkadas ekledikten sonra formun otomatik olarak kapanması için
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null: friend));
    setShowAddFriend(false); // add frinde bastım ama vazgeçtim, tüm formlar aynı anda açık olmasın diye selecte basınca bu otomakit kapanacak
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}{" "}
        </button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
