import React from 'react';

 const NewsItem=({ mode, title, description, imgurl, newsurl })=> {
  const cardTextColorClass = mode === 'dark' ? 'text-white' : 'text-dark';
  const cardBackgroundColor = mode === 'dark' ? 'bg-dark' : 'bg-light';

  return (
    <div className="my-3">
      <div className={`card ${cardBackgroundColor}`} style={{ width: "18rem" }}>
      <img src={!imgurl ? "https://media.istockphoto.com/id/637268486/photo/patan.jpg?s=612x612&w=0&k=20&c=IHL_X9XMlTKCFjXMAdJTr3dLoJTN-Vvn5QsYfNtnkgc=" : imgurl} className="card-img-top" alt="Article" />
        <div className="card-body">
          <h5 className={`text-uppercase mb-4 ${cardTextColorClass}`}>{title}</h5>
          <p className={`card-text ${cardTextColorClass}`}>{description}</p>
          <div>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${mode === 'dark' ? 'btn-light' : 'btn-dark'}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsItem;

