import React from 'react';

export default function NewsItem({ mode, title, description,imgurl }) {
  const cardTextColorClass = mode === 'dark' ? 'text-white' : 'text-dark';
  const cardBackgroundColor = mode === 'dark' ? 'bg-dark' : 'bg-light';

  return (
    <div className="my-3">
    <div className={`card ${cardBackgroundColor}`} style={{ width: "18rem" }}>
      <img src={imgurl} className="card-img-top" alt="Img" />
      <div className="card-body">
        <h5 className={`text-uppercase mb-4 ${cardTextColorClass}`}>{title}</h5>
        <p className={`card-text ${cardTextColorClass}`}>{description}</p>
        <a href="/newsdetail" className={`btn btn-sm ${mode === 'dark' ? 'btn-light' : 'btn-dark'}`}>
          Read More
        </a>
        </div>
      </div>
    </div>
  );
}