import axios from "axios";
import {
  API_URL,
  AWARDS,
  CATEGORIES,
  PLACES,
  TOURS,
  TYPES,
  USERS
} from "./config";

const apiSettings = {
  // Award
  getAwards: async () => {
    const endpoint = AWARDS;
    return await (await fetch(endpoint)).json();
  },
  getAward: async awardId => {
    const endpoint = `${AWARDS}/${awardId}`;
    return await (await fetch(endpoint)).json();
  },
  postAward: async body => {
    const endpoint = AWARDS;
    return await (await axios.post(endpoint, body));
  },
  putAward: async (awardId, body) => {
    const endpoint = `${AWARDS}/${awardId}`;
    return await (await axios.put(endpoint, body));
  },
  deleteAward: async awardId => {
    const endpoint = `${AWARDS}/${awardId}`;
    return await (await axios.delete(endpoint));
  },


  // Category
  getCategories: async () => {
    const endpoint = CATEGORIES;
    return await (await fetch(endpoint)).json();
  },
  getCategory: async categoryId => {
    const endpoint = `${CATEGORIES}/${categoryId}`;
    return await (await fetch(endpoint)).json();
  },
  postCategory: async body => {
    const endpoint = CATEGORIES;
    return await (await axios.post(endpoint, body));
  },
  updateCategory: async (categoryId, body) => {
    const endpoint = `${CATEGORIES}/${categoryId}`;
    return await (await axios.put(endpoint, body));
  },
  deleteCategory: async categoryId => {
    const endpoint = `${CATEGORIES}/${categoryId}`;
    return await (await axios.delete(endpoint));
  },


  // Place
  getPlaces: async () => {
    const endpoint = PLACES;
    return await (await fetch(endpoint)).json();
  },
  getPlace: async placeId => {
    const endpoint = `${PLACES}/${placeId}`;
    return await (await fetch(endpoint)).json();
  },
  postPlace: async body => {
    const endpoint = PLACES;
    return await (await axios.post(endpoint, body));
  },
  updatePlace: async (placeId, body) => {
    const endpoint = `${PLACES}/${placeId}`;
    return await (await axios.put(endpoint, body));
  },
  deletePlace: async placeId => {
    const endpoint = `${PLACES}/${placeId}`;
    return await (await axios.delete(endpoint));
  },


  // Tour
  getTours: async () => {
    const endpoint = TOURS;
    return await (await fetch(endpoint)).json();
  },
  getTour: async tourId => {
    const endpoint = `${TOURS}/${tourId}`;
    return await (await fetch(endpoint)).json();
  },
  postTour: async body => {
    const endpoint = TOURS;
    return await (await axios.post(endpoint, body));
  },
  updateTour: async (tourId, body) => {
    const endpoint = `${TOURS}/${tourId}`;
    return await (await axios.put(endpoint, body));
  },
  deleteTour: async tourId => {
    const endpoint = `${TOURS}/${tourId}`;
    return await (await axios.delete(endpoint));
  },


  // Type
  getTypes: async () => {
    const endpoint = TYPES;
    return await (await fetch(endpoint)).json();
  },
  getType: async typeId => {
    const endpoint = `${TYPES}/${typeId}`;
    return await (await fetch(endpoint)).json();
  },
  postType: async body => {
    const endpoint = TYPES;
    return await (await axios.post(endpoint, body));
  },
  updateType: async (typeId, body) => {
    const endpoint = `${TYPES}/${typeId}`;
    return await (await axios.put(endpoint, body));
  },
  deleteType: async typeId => {
    const endpoint = `${TYPES}/${typeId}`;
    return await (await axios.delete(endpoint));
  },


  // User
  getUsers: async () => {
    const endpoint = USERS;
    return await (await fetch(endpoint)).json();
  },
  getUser: async userId => {
    const endpoint = `${USERS}/${userId}`;
    return await (await fetch(endpoint)).json();
  },
  postUser: async body => {
    const endpoint = USERS;
    return await (await axios.post(endpoint, body));
  },
  updateUser: async (userId, body) => {
    const endpoint = `${USERS}/${userId}`;
    return await (await axios.put(endpoint, body));
  },
  deleteUser: async userId => {
    const endpoint = `${USERS}/${userId}`;
    return await (await axios.delete(endpoint));
  }
}

export default apiSettings;
