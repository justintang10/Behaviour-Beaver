// import React from "react";

// type ContainerProps = {
//   children: React.ReactNode;
// };

// export function Container({ children }: ContainerProps) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-between",
//         backgroundColor: "white",
//         color: "black",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       {children}
//     </div>
//   );
// }
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "1rem",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1 className="text-8xl font-extrabold" >Answers Me</h1>
      {children}
    </div>
  );
}
