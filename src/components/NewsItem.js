import React, { Component } from 'react'


export class NewsItem extends Component {
 
  
  render() {
    const {title , description , imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }} >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://media.khou.com/assets/KHOU/images/d14833c1-a82f-42f3-a10f-cf65159b7183/d14833c1-a82f-42f3-a10f-cf65159b7183_1140x641.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-dark">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem