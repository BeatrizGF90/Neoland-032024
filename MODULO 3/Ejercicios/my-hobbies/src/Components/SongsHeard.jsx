export const SongsHeard = ({ Songs }) => {
  const { songsHeard } = Songs;
  return (
    <div className="containerSongs">
      <h2>Songs listened</h2> <hr /> {/*<hr /> añade un línea debajo del h2 */}
      <ul>
        {songsHeard.map((song, index) => (
          <p key={index}>{song}</p>
        ))}
      </ul>
    </div>
  );
};
