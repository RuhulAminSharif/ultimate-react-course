import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, selectedFriend, handleSelectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
        ></Friend>
      ))}
    </ul>
  );
};

export default FriendsList;
