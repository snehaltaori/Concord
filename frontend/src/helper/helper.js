export const BASE_URL = "http://localhost:8080/api/v1";

export const fetchAuthorized = async (path) => {
  const token = localStorage.getItem("jwtToken");
  const response = await fetch("http://localhost:8080/pvt", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("response", response);
};
