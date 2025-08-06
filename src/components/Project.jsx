export const Project = ({ title, url, img }) => {
  return (
    <a href={url} target="_blank" className="project" rel="noreferrer">
      <img className="img" src={img} alt={title} />
      <h5>{title}</h5>
    </a>
  )
}