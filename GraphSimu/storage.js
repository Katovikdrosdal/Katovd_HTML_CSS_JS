
export function saveGraph(nodes, links) {
    const graphData = { nodes, links };
    const blob = new Blob([JSON.stringify(graphData)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "graph.json";
    link.click();
  }
  
  export function loadGraph(callback) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => callback(JSON.parse(reader.result));
        reader.readAsText(file);
      }
    });
    input.click();
  }
  