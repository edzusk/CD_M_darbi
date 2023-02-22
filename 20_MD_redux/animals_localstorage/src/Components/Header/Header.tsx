import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnimal,
  Animal,
  filter,
  getAnimals,
  Habitat,
} from "../../store/animalslice";
import { RootState } from "../../store/store";
import style from "./Header.module.scss";

const Header = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const dispatch = useDispatch();

  const [name, setanimalname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [habitat, sethabitat] = useState<Habitat>("Jungle");

  const handlesubmit = () => {
    // const id = uuidv4()!;
    const newAnimal: Animal = { name, imageUrl, habitat };
    dispatch(addAnimal(newAnimal));
  };

  return (
    <div className="container">
      <nav className={style.nav}>
        <li>
          <button
            className={style.button}
            onClick={() => {
              dispatch(getAnimals());
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              dispatch(filter("Forest"));
            }}
          >
            Forest
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              dispatch(filter("Jungle"));
            }}
          >
            Jungle
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              dispatch(filter("Sea"));
            }}
          >
            Sea
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              dispatch(filter("Desert"));
            }}
          >
            Desert
          </button>
        </li>
      </nav>
      <div className={style.addAnimalWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault;
            handlesubmit();
          }}
          className={style.addAnimalForm}
          action=""
        >
          <input
            onChange={(e) => setanimalname(e.target.value)}
            required={true}
            type="text"
            placeholder="Elephant..."
          />
          <input
            onChange={(e) => setimageUrl(e.target.value)}
            required={true}
            type="text"
            placeholder="https://....."
          />

          <select
            value={habitat}
            onChange={(e) => sethabitat(e.target.value as Habitat)}
            name=""
            id=""
          >
            <option value="Jungle">Jungle</option>
            <option value="Forest">Forest</option>
            <option value="Desert">Desert</option>
            <option value="Sea">Sea</option>
          </select>
          <button className={style.button}>Add animal</button>
        </form>
      </div>
    </div>
  );
};

export default Header;

function uuidv4() {
  throw new Error("Function not implemented.");
}
