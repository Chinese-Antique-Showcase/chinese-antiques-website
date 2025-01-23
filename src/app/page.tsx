import mockData from "../../mock-data.json"

// Server Component Example

async function getAntiqueData() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/antiques?populate=*`, {
    cache: "force-cache", // Cache the data if it doesn't update often
    headers: {
      AUthorization: `Bearer ${process.env.API_BEARER_TOKEN}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function getAntiqueDataMock()
{
  return mockData;
}


export default async function Home() {

  const responseMock = getAntiqueDataMock();
  const antiquesMock = responseMock.data;


  const response = await getAntiqueData();
  const antiques = response.data;

  //test comment on right branch
  return (

    // Replace antiques with antiquesMock
    <div>
      <ul>
        {antiques.map((item) => (
            <li key={item.id}>{item.Name}</li>
          ))}
      </ul>
    </div>
  );
}
