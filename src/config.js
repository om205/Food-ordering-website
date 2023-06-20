export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const LOGO_IMG_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-BISTduu2YiYnv4shhu5ixq2cJFg2SeRzA&usqp=CAU/";

export const SWIGGY_FETCH_RESTAURANT_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5";

const coordinates = {
  dhanbad: {
    lat: 23.7956531,
    lng: 86.43038589999999,
  },
  agra: {
    lat: 27.1766701,
    lng: 78.00807449999999,
  },
  firozabad: {
    lat: 27.1591961,
    lng: 78.3957331,
  },
  lucknow: {
    lat: 26.8466937,
    lng: 80.94616599999999,
  },
  delhi: {
    lat: 28.7040592,
    lng: 77.10249019999999,
  },
  bangalore: {
    lat: 12.9715987,
    lng: 77.5945627,
  },
};

export const LOCATION_COORDINATES = coordinates["firozabad"];
