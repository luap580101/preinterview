import axios from "axios";

const API_URL = "https://itunes.apple.com/tw/rss";
const LOOKUP_URL = "https://itunes.apple.com/tw/lookup?id=";

class AppService {
  // 獲取推薦應用列表
  async getTopGrossingApplications(): Promise<any> {
    try {
      const response = await axios.get(
        `${API_URL}/topgrossingapplications/limit=10/json`
      );
      if (response.status === 200) {
        return response;
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching top grossing applications:", error);
      throw error;
    }
  }
}

export default new AppService();
