import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div>
      <div style={{display:"flex", justifyContent: "space-between"}}/>
         {characters.map(character => (
            <Card 
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            />
         ))}
      </div>
   );
   
}

