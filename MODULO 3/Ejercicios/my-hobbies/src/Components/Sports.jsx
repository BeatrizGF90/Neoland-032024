export const Sports = ({ Sports }) => {
  const { sports } = Sports;
  return (
    <div className="containerSports">
      <h2>Sports</h2> <hr /> {/*<hr /> añade un línea debajo del h2 */}
      {sports.map((sport, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {sport.name} <br />
            <strong>Indoor:</strong> {sport.indoor ? "Yes" : "No"} <br />
            <strong>Favorite Team:</strong> {sport.favoriteTeam}
          </p>
          {index !== sports.length - 1 && (
            <>
              <br />
            </>
          )}
          {/* Agrega un salto de línea si no es el último deporte para diferenciar un deporte de otro */}
        </div>
      ))}
    </div>
  );
};
