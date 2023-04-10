// import { createContext, useContext, useState } from "react";
// import { IAccount, IAlunoAcc, IProfessorAcc, IAccountContext } from '../@types/account';

// export const AccountContext = createContext<IAccountContext | null>(null);;
// AccountContext.displayName = "SignUp";

// export default function AccountProvider({children}:any) {
//     const [account, setAccount] = useState<IAlunoAcc[] | IProfessorAcc[]>([]);
//     return (
//         <AccountContext.Provider value={{ account, setAccount }}>
//           {children}
//         </AccountContext.Provider>
//       );
//   }

// export function useFavoritoContext() {
//   const { favorito, setFavorito } = useContext(SignUpContext);

//   function adicionarFavorito(novoFavorito) {
//     const favoritoRepetido = favorito.some(
//       (item) => item.id === novoFavorito.id
//     );

//     let novaLista = [...favorito];

//     if (!favoritoRepetido) {
//       novaLista.push(novoFavorito);
//       return setFavorito(novaLista);
//     }

//     novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
//     return setFavorito(novaLista);
//   }
//   return {
//     favorito,
//     adicionarFavorito,
//   };
// }
