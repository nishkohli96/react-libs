import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import axiosApi from '@Utils/AxiosApi';

const SwrEg = () => {
    useEffect(() => {
        getPokemonDetails();
    }, []);

    async function getPokemonDetails() {
        const resp = await axiosApi.get('/pikachu');
        setPokeDetais(resp.data);
        console.log(resp);
    }

    const [pokeDetais, setPokeDetais] = useState({});

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
        </div>
    );
};

export default SwrEg;
