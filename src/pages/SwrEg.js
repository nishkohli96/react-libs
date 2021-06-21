import { useEffect, useState } from 'react';
import axiosApi from '@Utils/AxiosApi';
import ReactWindowEg from '@Molecules/ReactWindowEg';

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
            <ReactWindowEg />
        </div>
    );
};

export default SwrEg;
