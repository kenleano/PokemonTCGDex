import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PokemonCardDetailCss from "./PokemonCardDetails.css";

const PokemonCardDetail = () => {
  const { cardId } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pokemontcg.io/v2/cards/${cardId}`,
          {
            headers: {
              "X-Api-Key": "e43cb89d-fea8-42af-8c3c-1b2ba1ee0bf2",
            },
          }
        );

        setCard(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cardId]);

  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <p className="card-name">{card.name}</p>
  
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div>
          <img src={card.images.large} alt={card.name} className="card-image" />
        </div>
        <div className="card-details">
          <h2>Card Details</h2>
          <p>ID: {card.id}</p>
          <p>Rules: {card.rules}</p>
          <p>Subtypes:</p>
          {card.subtypes?.map((subtype, index) => (
            <div key={index}>
              <p>{subtype}</p>
            </div>
          ))}
          {card.attacks?.map((attack, index) => (
            <div className="card-attack" key={index}>
              <h3>{attack.name}</h3>
              <p>{attack.damage}</p>
              <p>{attack.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default PokemonCardDetail;
