
export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <li>{title}</li>
        <img  src={url} alt="" />
    </div>
  )
}
