import { useEffect, useState } from 'react';
import axiosApi from '_Utils/AxiosApi';
import ReactWindowEg from '_Molecules/ReactWindowEg';

const SwrEg = () => {

  const [pokeDetais, setPokeDetais] = useState({});

  async function getPokemonDetails() {
    const resp = await axiosApi.get('/pikachu');
    setPokeDetais(resp.data);
    console.log(resp);
  }

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <div className="fullscreen">
      <p className="heading text-lg">Pokemon Details are -</p>
      <p>
        <span className="font-semibold">Name: </span>
        {pokeDetais.name}
      </p>
      <p>
        <span className="font-semibold">Id: </span>
        {pokeDetais.id}
      </p>
      <ReactWindowEg />
    </div>
  );
};

export default SwrEg;
