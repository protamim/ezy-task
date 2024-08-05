// interface WorkspaceHomeProps {
//   workspace: {
//     title: string;
//     description: string;
//     boards: Array<{
//       name: string;
//       lists: Array<{
//         title: string;
//         cards: Array<{ title: string; description: string }>;
//       }>;
//     }>;
//   };
// }

interface Card {
  title: string;
  description: string;
}

interface List {
  title: string;
  cards: Array<Card>;
}

interface Board {
  name: string;
  lists: Array<List>;
}

interface Workspace {
  id: string;
  title: string;
  description: string;
  boards: Array<Board>;
}

export type { Card, List, Board, Workspace };