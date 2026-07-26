import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container" role="status" aria-label="Loading content">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;