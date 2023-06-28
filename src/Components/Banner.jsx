import React from "react";

export const Banner = () => {
  return (
    <div className="banner w-full h-full px-20 py-10">
      <div className="sm-banner grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="bannerbox-1">
          <h2>Crazy Deals</h2>
          <h1>buy 1 get 1 free</h1>
          <p>The best classic dress is on sale at cara</p>
          <button>Learn More</button>
        </div>
        <div className="bannerbox-1 bannerbox-2">
          <h2>spring/summer</h2>
          <h1>upcoming season</h1>
          <p>The best classic dress is on sale at cara</p>
          <button>Collection</button>
        </div>
      </div>
      <div className="banner-2 grid gap-10 lg:grid-cols-3 sm:grid-cols-1 mt-20">
        <div className="banner-box">
          <h1>SEASONAL SALE</h1>
          <h2>Winter Collection - 50% OFF</h2>
        </div>
        <div className="banner-box banner-box2">
          <h1>NEW FOOTWEAR COLLECTION</h1>
          <h2>Spring / Summer 2023</h2>
        </div>
        <div className="banner-box banner-box3">
          <h1>T-SHIRTS</h1>
          <h2>New Trendy Prints</h2>
        </div>
      </div>
    </div>
  );
};
