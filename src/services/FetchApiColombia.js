export async function fetchFromApiColombia(endpoint) {
    const baseUrl = "https://api-colombia.com/api/v1/";
    try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        if (!response.ok) {
            const errorDetails = await response.json().catch(() => ({}));
            throw new Error(
                `Error al obtener los datos: ${response.status} ${response.statusText}. Detalles: ${errorDetails.message || 'No hay detalles adicionales disponibles.'}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error de obtención:", error.message);
        throw error;
    }
}
