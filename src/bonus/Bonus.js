import { useState } from 'react';

const Bonus = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [index, setIndex] = useState(0);
    const nextLetter = () => setIndex(index + 1);
    return(
        <div>
            <h1>{letters[index]}</h1>
            <button onClick={nextLetter}>NEXT LETTER</button>
        </div>
    );
}

export default Bonus;