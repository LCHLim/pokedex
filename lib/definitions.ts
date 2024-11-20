export type ListResult = {
  name: string;
  url: string;
};

export type InfoCardProps = {
  name: string;
  id: number;
  imageUrl: string;
};

export type Pokemon = {
  name: string;
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: PokemonStat[];
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
