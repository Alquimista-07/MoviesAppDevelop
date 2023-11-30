// NOTA: Cargar data desde JSON
import { environment } from "../environments/environment.prod";

const base_url = environment.base_url;

export const apiServer = {
    serverUrl: `${base_url}assets/data/local_movies.json`,
    siteName: 'Movies App'
}