import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "surendra",
    email: "surencool4@gmail.com",
    dob: "30/12/1990",
  });
  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

// import "./App.css";
// import { UserProvider, useUser } from "./contexts/UserContext";
//
// const LoggedIsUser = () => {
//   const { user } = useUser();
//   return (
//     <p>
//       Hello <span className="UserName">{user.name}</span>
//     </p>
//   );
// };
//
// const Header = () => {
//   return (
//     <header>
//       <h2>Blog App</h2>
//       <LoggedIsUser />
//     </header>
//   );
// };
//
// const Page = () => {
//   const { user } = useUser();
//   return (
//     <div>
//       <h2>What is lorem ipsums?</h2>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//       <p>Written by {user.name}</p>
//     </div>
//   );
// };
//
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Page />
//     </div>
//   );
// }
//
// function Root() {
//   return (
//     <UserProvider>
//       <App />
//     </UserProvider>
//   );
// }
//
// export default Root;
