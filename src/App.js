const  App = () => {
  const categories = [
    {
      name: "Hats"
    },
    {
      name: "Jackets"
    },
    {
      name: "Sneakers"
    },
    {
      name: "Womens"
    },
    {
      name: "Mens"
    }
  ]
  return (
    <div className="categories-container">
      {
        categories.map(({name}) => (
          <div className="category-container">
            <div className="category-img"></div>
            <div className="category-body">
              <h1>{name}</h1>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
