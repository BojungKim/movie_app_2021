import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
    return (
      <div>
        <h2>I like { name }</h2>
        <h4>{ rating }/5.0</h4>
        <img src={ picture } alt={name} />
      </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://08food.com/web/product/big/201801/33_shop1_243196.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg',
    rating: 3,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.chungjungone.com/knowhow/images/blog/recipe/1084/1.jpg',
    rating: 2,
  }
];

/*
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
*/

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;