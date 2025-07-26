import React, { lazy, Suspense } from 'react';

// Check if we are in a browser environment before trying to import the component
const LiteYouTubeEmbed = lazy(() => {
  // The dynamic import will only be executed in a client-side environment.
  return import('react-lite-youtube-embed').then(module => {
    // The CSS needs to be imported here as well, only on the client.
    import('react-lite-youtube-embed/dist/LiteYouTubeEmbed.css');
    return { default: module.default };
  });
});

interface Props {
  id: string;
  title: string;
}

const Youtube = ({ id, title }: Props) => {
  // Check if we're on the server. If so, render nothing or a placeholder.
  // This component is intended to be used with client:only, so this is a safeguard.
  if (typeof window === 'undefined') {
    return <div className="yt-lite-container-ssr-placeholder">Video loading...</div>;
  }

  return (
    <Suspense fallback={<div className="yt-lite-container-ssr-placeholder">Loading video...</div>}>
      <div className="yt-lite-container">
        <LiteYouTubeEmbed id={id} title={title} />
      </div>
    </Suspense>
  );
};

export default Youtube;
