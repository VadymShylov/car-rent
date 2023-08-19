import { $instance } from '../baseApi/baseApi';

export const getCatalogRequest = async () => {
  const { data } = await $instance.get(`/cars`);

  return data;
};

export const getCatalogSearch = async () => {
  const { data } = await $instance.get('/cars');

  return data;
};
