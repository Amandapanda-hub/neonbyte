import React from 'react';

export default function FeaturedVideos() {
  // Sample data for the videos
  const videos = [
    {
      id: 'qygf4aICf34',
      title: 'Video Title 1',
      description: 'Description for Video 1'
    },
    {
      id: 'Z6nMITUbEJQ',
      title: 'Video Title 2',
      description: 'Description for Video 2'
    },
    {
      id: 'kfYEiTdsyas',
      title: 'Video Title 3',
      description: 'Description for Video 3'
    },
    {
      id: 'x_03JQUc9Ao',
      title: 'Video Title 4',
      description: 'Description for Video 4'
    },
    {
      id: 'xvxPMRn-ar0',
      title: 'Video Title 5',
      description: 'Description for Video 5'
    },
    {
      id: 'G2j-fpQgGQM',
      title: 'Video Title 6',
      description: 'Description for Video 6'
    }
  ];

  return (
    <div className="bg-black text-white p-4 md:p-10">
    <h1 className="text-6xl font-bold text-center mb-20">Featured Videos</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {videos.map(video => (
        <div key={video.id}>
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe 
              title={video.title}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <h3 className="text-xl font-medium mt-4 mb-2">{video.title}</h3>
          <p className="text-base">{video.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
