import React, { useState } from 'react';

const PokemonMoviemnto = () => {

   //Com o uso do  useState é possivel fazer uma varivael  chamada "defrente"
  //  e uma função para atualizar a pocisao e variavel do pokemon, no caso a "atualizarpokemon".
  // com uso de booleanos é possivel definir que o pokemon esta de frente como verdadeiro 

  const [deFrente, atualizarpokemon] = useState(true);

  //A função handleClick é chamada quando o botão é clicado. 
 // A funcao botaoClick  por meio da variavvel "defrente"  rednereiza  o valor de "atualizarpokemon", alternando entre
 // verdaderia e falsa
  

  const botaoClick = () => {
    atualizarpokemon(!deFrente);
  };

  
  //variavel de onde a imagem esta localizada
  const imagelocal = deFrente
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png'
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/500.png';

// aqui está o return com o copilado das ações da questao
// dentro da div a elementos do jsx citados a cima mais de maneira que interagem entre si  como as congigurações 
// visuais da imagem como por exemplo o tamanho do pokemon
  return (
    <div>
      <img src={imagelocal} alt="Pokemon" style={{width:"400px"}} />
      <button onClick={botaoClick}>Mexer Imagem </button>
    </div>
  );
};

export default PokemonMoviemnto;
