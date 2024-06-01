import { createContext,useContext,useState } from "react";
//create a contex
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
   const [isAuthenticated, setAuthenticated] = useState(false);
   const [username, setUserName] = useState(null);
 
  

   function login(username, password) {
     
      if (username==="admin"&& password==='admin') {
         setAuthenticated(true);
         setUserName(username)
       
        
        
         return true;

      } else {
         logout()
         return false;
      }
   }
  

   function logout(){
  
      setAuthenticated(false)
   
   }


   return (

      <AuthContext.Provider value={{ isAuthenticated, login , username,logout}}>

         {children}
      </AuthContext.Provider>

   )
}
