import {putData} from './authServices';
export default async (url, params) => {
  try {
    return await putData.put(url, {...params}).then(res => {});
  } catch (e) {}
};
