import { Link } from "react-router-dom"
import Hero from "../hero/hero";
const SlidingHeader = ({header, imageindex}) =>{
    return(
        header &&
            header.map((index) => (
              <Link
                to={`/news/${index.slug}`}
                className="header"
                key={index.img.src}
                style={{ translate: `${-100 * imageindex}%` }}
              >
                <div
                  className="background-layer"
                  style={{
                    backgroundImage: index
                      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1)), url(${index.img.src})`
                      : "",
                    backgroundPosition: index.img.position
                      ? `${index.img.position}`
                      : "center",
                  }}
                ></div>
                <div className="text-layer">
                  <Hero heading={index.heading} author={index.author} />
                </div>
              </Link>
            ))
    )
}
export default SlidingHeader