export const Languages = ({ List }) => {
  const { languages } = List;
  return (
    <div className="containerLanguages">
      <h2>Idioms</h2> <hr /> {/*<hr /> añade un línea debajo del h2 */}
      {languages.map((language, index) => (
        <div key={index}>
          <p>
            <strong>language:</strong> {language.language} <br />
            <strong>wrlevel:</strong> {language.wrlevel} <br />
            <strong>splevel:</strong> {language.splevel}
          </p>
          {index !== language.length - 1 && (
            <>
              <br />
            </>
          )}
          {/* Agrega un salto de línea si no es el último idioma para diferenciar un idioma de otro */}
        </div>
      ))}
    </div>
  );
};
