import { useContext } from "react";
import { AppContext } from "../context";

const Item = ({ item }) => {
  const { dispatchItemEvent } = useContext(AppContext);

  const handleRemoveItem = () => {
    dispatchItemEvent("REMOVE_ITEM", { itemId: item.id });
  };
  return (
    <div className="Item">
      <h3>{item.title}</h3>
      <h4>{item.quantity}</h4>
      <div>
        <small>{item.price}</small>
      </div>

      <button onClick={handleRemoveItem}>Delete</button>
    </div>
  );
};

export default Item;
