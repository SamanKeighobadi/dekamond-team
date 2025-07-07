/**
 * A utility class to manage authentication tokens, including validation,
 * refreshing, and handling user login redirections.
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
   * Retrieves a valid access token. If the current token is invalid or expired, it will try to refresh it.
   * Redirects to the login page if no valid token can be obtained.
   * @async
   * @returns {Promise<string | void>} - A valid access token, or redirects to the login page.
   */
  async getAccessToken(): Promise<string | void> {
    const accessToken = localStorage.getItem("user");

    if (!accessToken) return this.redirectToLogin();
  }

  /**
   * Redirects the user to the login page and clears stored tokens from localStorage.
   */
  redirectToLogin() {
    localStorage.removeItem("user");

    window.location.href = this.loginUrl;
  }
}

export default AuthTokenManager;
