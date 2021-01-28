export const login = user => (
    fetch("session", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    
  );
  
  export const signup = user => (
    fetch("users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  
  export const logout = () => (
    fetch("session", { method: "DELETE" })
  );
  
  export const checkLoggedIn = async () => {
    const response = await fetch('session');
    const { user } = await response.json();
    const menu = await fetch('menu/menuItems');
    const  menuItems  = await menu.json()
    let preloadedState = {};
    // if (user) {
      preloadedState = {
        session: user ? user : "",
        menuItems: menuItems ? menuItems : ""
      // };
    }
    return preloadedState;
  };