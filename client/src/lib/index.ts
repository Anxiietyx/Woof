export const getData = async (endpoint: string) => {
  try {
    console.log(endpoint)
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Data fetching Error" + response?.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching data", error);
    throw error;
  }
};
