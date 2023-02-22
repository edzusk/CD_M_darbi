import { useState } from "react";
import {
  Animal,
  Habitat,
  useAddAnimalMutation,
  useGetAnimalsByHabitatMutation,
} from "../../store/APIanimalSlice";

import style from "./Header.module.scss";



const Header = () => {

  const [name, setanimalname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [habitat, sethabitat] = useState<Habitat>("Jungle");

  const [addAnimal] = useAddAnimalMutation();
  const [getAnimalsByHabitat] = useGetAnimalsByHabitatMutation();

  const handlesubmit = () => {
    // const id = uuidv4()!;
    const newAnimal = { name, imageUrl, habitat };
    addAnimal(newAnimal);
  };

  return (
    <div className="container">
      <nav className={style.nav}>
        <li>
          <button
            className={style.button}
            onClick={() => {
              ;
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              getAnimalsByHabitat('Forest')
            }}
          >
            Forest
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              getAnimalsByHabitat('Jungle')
            }}
          >
            Jungle
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              getAnimalsByHabitat('Sea')
            }}
          >
            Sea
          </button>
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => {
              getAnimalsByHabitat('Desert')
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


