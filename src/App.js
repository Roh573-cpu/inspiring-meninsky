import "./styles.css";
import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-tree";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      {/* passing down this state as a prop */}
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
