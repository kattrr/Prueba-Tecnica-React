export async function fetchFromApiColombia(endpoint) {
    const baseUrl = "https://api-colombia.com/api/v1/";
    try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
