import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import ReactQueryEg from '_Atoms/ReactQueryEg';
import axiosApi from '_Utils/AxiosApi';

const AxiosEg = () => {

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
      <Divider sx={{ my: '20px' }}/>
      <ReactQueryEg />
    </div>
  );
};

export default AxiosEg;
