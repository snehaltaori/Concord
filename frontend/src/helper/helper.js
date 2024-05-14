export const BASE_URL = "http://localhost:8080/api/v1";

/* ------------------------------------------------------ */
export async function getAuthorized (path) {
  let data = null;
  const token = localStorage.getItem("jwtToken");
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  // console.log("response", response);
  if (response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    // console.log(data);
  } else {
    console.error("Error:", response.status);
  }
  return data;
};

/// how to use this function

/* async function bruh() {
  const data = await getAuthorized("/pvt");
  console.log(data);
}

useEffect(() => {
bruh();
}, []); */
/* ------------------------------------------------------ */
