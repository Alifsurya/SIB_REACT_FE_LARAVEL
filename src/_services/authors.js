import API from "../_api"

export const getAuthors = async () => {
  const { data } = await API.get("/author")
  return data.data
};