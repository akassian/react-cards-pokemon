import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

function useFlip() {
  const [isUp, setIsUp] = useState(true);
  const flip = () => setIsUp((isUp) => !isUp);
  return [isUp, flip];
}

// TODO: USE useEffect to stop useAxios from happening multiple times!!!!
function useAxios(baseUrl) {
  const [cards, setCards] = useState([]);
  const addCard = async (endUrl = "") => {
    try {
      console.log(endUrl);
      let response = await axios.get(`${baseUrl}${endUrl}`);

      // response = await axios.get(baseUrl);
      setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    } catch {
      // TODO: error handling
    }
  };

  return [cards, addCard];
}

export { useFlip, useAxios };
