import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../api/api.js";

function LearningWrapper() {
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    getData(`decks/${deckId}`, controller.signal).then(setDeck);

    return () => {
      controller.abort();
    };
  }, []);

  if (!deck) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Learning: {deckId} {deck.name} {deck.description}
    </div>
  );
}

export default LearningWrapper;
