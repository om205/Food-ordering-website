import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IMG_CDN_URL } from "../config";
import NO_IMG_LOGO from "../assets/no-image-icon.png";

const Noimage = () => {
  return (
    <div className="no-image">
      <img src={NO_IMG_LOGO} alt="no image" />
    </div>
  );
};

function MenuComponent({ data }) {
  console.log(data);
  return (
    <div>
      {data?.map((category, index) => (
        <div key={index} className="item-category">
          <h2>{category.category}</h2>
          <div className="carousel-container">
            <Carousel
              showThumbs={false}
              showArrows={true}
              swipeable={true}
              dynamicHeight={false}
              centerMode={window.innerWidth >= 768 ? true : false}
              centerSlidePercentage={window.innerWidth >= 768 ? 30 : 100}
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={false}
              renderIndicator={false}
              //   itemsToShow={4} // Display 4 items at a time
              responsive={
                // Responsive settings for different screen sizes
                {
                  0: { items: 1 },
                  768: { items: 4 },
                }
              }
            >
              {category?.items?.map((item) => (
                <div key={item.id} className="card carousel-items">
                  <div className="item-image-container">
                    {item.imageId ? (
                      <img
                        src={IMG_CDN_URL + item.imageId}
                        alt="item"
                        className="item-image"
                      />
                    ) : (
                      <Noimage />
                    )}
                  </div>
                  <div className="card-content">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price / 100}/-</p>
                  </div>
                  {/* Add additional content or styling for each item */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuComponent;
