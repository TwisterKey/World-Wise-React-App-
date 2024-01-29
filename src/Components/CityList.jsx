/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner></Spinner>;

  console.log(cities);

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map"></Message>
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
