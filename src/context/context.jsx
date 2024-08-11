import React, { createContext, useState } from 'react';
const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { description: 'What is Paris? 🗼', question: 'Capital of France ', answer: 'Paris 🗼', status: false },
    { description: 'What is 4? ➗', question: 'Square root of 16 🧮', answer: '4️⃣', status: false },
    { description: 'What is blue? 🌌', question: 'Color of the sky 🌥️', answer: 'Blue 🔵', status: false },
    { description: 'What is Pacific? 🌊', question: 'Largest ocean 🌏', answer: 'Pacific 🌊', status: false },
    { description: 'Who is Biden? 🇺🇸', question: 'President of the USA 🏛️', answer: 'Biden 👔', status: false },
    { description: 'What is Oxygen? 🧪', question: 'Element with symbol O 🧬', answer: 'Oxygen 🧪', status: false },
    { description: 'What is Venus? 🔥', question: 'Hottest planet 🌕', answer: 'Venus 🔥', status: false },
    { description: 'Who is Rowling? 📚', question: 'Author of Harry Potter 🧙‍♂️', answer: 'Rowling 🖋️', status: false },
    { description: 'What is Everest? 🏔️', question: 'Tallest mountain ⛰️', answer: 'Everest 🏔️', status: false },
    { description: 'What is the Sun? ☀️', question: 'Closest star to Earth 🌍', answer: 'Sun 🌞', status: false },
    { description: 'What is Yen? 💴', question: 'Currency of Japan 🗾', answer: 'Yen 💴', status: false },
    { description: 'What is Red? 🟥', question: 'Primary color red 🎨', answer: 'Red 🟥', status: false },
    { description: 'What is Seven? 🌍', question: 'Number of continents 🗺️', answer: 'Seven 7️⃣', status: false },
    { description: 'What is Hydrogen? 🧪', question: 'First element in the periodic table 🔬', answer: 'Hydrogen 🧪', status: false },
    { description: 'What is Square? ◼️', question: 'Shape with 4 equal sides 🔲', answer: 'Square ◻️', status: false },
    { description: 'What is Portuguese?', question: 'The main language in Brazil 🗣️', answer: 'Portuguese ', status: false },
    { description: 'What is Water? 💧', question: 'Common name for H2O 🧊', answer: 'Water 💧', status: false },
    { description: 'What is Saturn? 💫', question: 'Planet known for rings 🪐', answer: 'Saturn 💫', status: false },
    { description: 'Who is Washington? 🇺🇸', question: 'First President of the USA 🏛️', answer: 'Washington 👔', status: false },
    { description: 'What is Sahara? 🏜️', question: 'Largest desert 🌍', answer: 'Sahara 🏜️', status: false },
    { description: 'Who is Holmes? 🕵️‍♂️', question: 'Main character in Sherlock Holmes 🕵️', answer: 'Holmes 🔍', status: false },
    { description: 'What is Nile? 🏞️', question: 'Longest river 🌍', answer: 'Nile 🌊', status: false },
    { description: 'What is China?', question: 'Most populous country 🌏', answer: 'China 🏯', status: false },
    { description: 'What is Pound? 💷', question: 'Unit of currency in the UK', answer: 'Pound 💷', status: false },
    { description: 'What is Thermometer? 🌡️', question: 'Device for measuring temperature 🧪', answer: 'Thermometer 🌡️', status: false },
    { description: 'What is Photosynthesis? 🌱', question: 'Process of converting sunlight into food ☀️', answer: 'Photosynthesis 🌞', status: false },
    { description: 'Who is Fitzgerald? 📖', question: 'Author of The Great Gatsby 🖋️', answer: 'Fitzgerald 📚', status: false },
    { description: 'What is Gravity? 🌍', question: 'Force that attracts objects toward the Earth 🧲', answer: 'Gravity 🌏', status: false },
    { description: 'Who is Einstein? 🧠', question: 'Theoretical physicist who developed the theory of relativity 🔬', answer: 'Einstein 🧠', status: false },
    { description: 'What is DNA? 🧬', question: 'Molecule that carries genetic information in living beings 🧑‍🔬', answer: 'DNA 🧬', status: false },
  ]);
  return (
    <MyContext.Provider value={{data}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
