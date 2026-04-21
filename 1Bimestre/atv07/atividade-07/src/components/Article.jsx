export default function Article(props) {
  return (
    <article>
      <h2>{props.titulo}</h2>

      <p>
        Data da Final:
        <time dateTime={props.dataValue}>{props.dataTexto}</time>
      </p>

      <p>{props.paragrafo1}</p>

      <figure>
        <img src={props.imgSrc} alt={props.imgAlt} width="600" />
        <figcaption>{props.imgLegenda}</figcaption>
      </figure>

      <p>{props.paragrafo2}</p>
    </article>
  );
}