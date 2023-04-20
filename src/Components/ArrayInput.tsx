import { useState } from 'react';

interface IProp {
  inputArray: number[];
  setInputArray: React.Dispatch<
    React.SetStateAction<number[]>
  >;
}

const ArrayInput = (props: IProp) => {
  const [inputString, setInputString] =
    useState<string>('');

  const handleSubmit = () => {
    console.log('input: ', inputString);

    const numbers: number[] = inputString
      .split(', ')
      .map((num) => Number(num));

    console.log('Numbers: ', numbers);
    props.setInputArray(numbers);

    setInputString('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ArrayInput;
