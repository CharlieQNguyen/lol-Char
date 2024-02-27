// Ensure you're using Next.js since <Image /> is a Next.js component
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Import Image from next/image

interface Champion {
  id: string;
  name: string;
  image: {
    full: string;
  };
}

interface ChampionData {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}

const Char = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const getCharData = async () => {
      try {
        const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json");
        const championsData: ChampionData = response.data;
        const championsArray = Object.values(championsData.data);
        setChampions(championsArray);
      } catch (error) {
        console.log("error", error);
      }
    };

    getCharData();
  }, []);

  const baseLoadingImageUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";

  return (
    <div className="grid grid-cols-4 gap-5">
      {champions.map((champion) => (
        <div key={champion.id}>
          <h2>{champion.name}</h2>
          <Image
            src={`${baseLoadingImageUrl}/${champion.id}_0.jpg`}
            alt={`${champion.name} loading screen`}
            width={308}
            height={560}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Char;