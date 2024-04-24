import React from 'react';
import NewsItem from './NewsItem'; // Import NewsItem component

export default function News({ mode, title, description,imgurl}) {
  return (
    <div className="container my-3">
        <div className={`text ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
        <h2>SahajKhabar-Headlines</h2>
        </div>
        <div className="row ">
    <div className='col-md-4'>

      <NewsItem mode={mode} title="MyTitle" description="MyDescription" imgurl={imgurl}/>
      </div>
      <div className='col-md-4'>
      <NewsItem mode={mode} title="MyTitle" description="MyDescription" imgurl={imgurl}  />
      </div>
      <div className='col-md-4'>
      <NewsItem mode={mode} title="MyTitle" description="MyDescription"  imgurl={imgurl}/>
      </div>
      <div className='col-md-4'>
      <NewsItem mode={mode}  title="MyTitle" description="MyDescription" imgurl={imgurl}/>
      </div>
      <div className='col-md-4'>
      <NewsItem mode={mode} title="MyTitle" description="MyDescription" imgurl={imgurl} />
      </div>
      </div>
      </div>
    
  );
}