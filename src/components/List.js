import React from "react";
import data from "../helper/data"


const List = ({index}) => {
  const filteredList = data.slice(index, index + 5)

  //  console.log(data)
  return (
    <>
    {
      filteredList.map((person) => (
        <article className="person" key={person.id}>
          <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.email}</p>
              <p>{person.age} years</p>
            </div>
        </article>        
      ))
    }

    </>
  );
};

export default List;
