import { BASE_URL } from "@/constant/links";
import axios from "axios";

async function fetchAllGallery() {
  try {
    const { data } = await axios.get(`${BASE_URL}/gallery`);
    return data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
}

async function getAllMembers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/member`);

    return data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
}

async function getAllMessages() {
  try {
    const { data } = await axios.get(`${BASE_URL}/contact-us`);
    return data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
}

async function getReviews() {
  try {
    const { data } = await axios.get(`${BASE_URL}/reviews`);
    return data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
}

async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);

    return data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
}

export { fetchAllGallery, getAllMembers, getAllMessages, getReviews, getUsers };
