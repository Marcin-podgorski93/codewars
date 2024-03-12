function friend(names){
    return names.filter(name => name.length === 4);
  }

  const inputNames = ["Ryan", "Kieran", "Mark"];

  const  outputNames = friend(inputNames);

  console.log(outputNames);

  
//   console.log(friend)


//   const friend = ["Ryan", "Kieran", "Mark"];

//   const filterFriend = friend.filter( word => word.length === 4);
//   console.log(filterFriend)