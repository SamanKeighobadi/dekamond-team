/**
 * A utility class to manage authentication tokens and user data.
 */
class AuthTokenManager {
  public loginUrl: string;

  /**
   * Creates an instance of AuthTokenManager.
   * @param {string} loginUrl - The URL for the login page.
   */
  constructor(loginUrl: string) {
    this.loginUrl = loginUrl;
  }

  /**
   * Retrieves a valid access token from localStorage.
   * Redirects to the login page if no token is found.
   * @async
   * @returns {Promise<string | void>} - A valid access token, or redirects to the login page.
   */
  async getAccessToken(): Promise<string | void> {
    const accessToken = localStorage.getItem("randonUser");
    if (!accessToken) return this.redirectToLogin();
    return accessToken;
  }

  /**
   * Stores user data in localStorage.
   * @param {any} data - The data to store (e.g., API response).
   */
  setUserData(data: any): void {
    localStorage.setItem("randonUser", JSON.stringify(data));
  }

  /**
   * Redirects the user to the login page and clears stored tokens from localStorage.
   */
  redirectToLogin() {
    localStorage.removeItem("randonUser");
    window.location.href = this.loginUrl;
  }
}

export default AuthTokenManager;