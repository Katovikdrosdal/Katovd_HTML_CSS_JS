const graphArea = d3.select("#graph-area");
const width = graphArea.node().offsetWidth;
const height = graphArea.node().offsetHeight;

const svg = graphArea.append("svg").attr("width", width).attr("height", height);

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", () => {
    const isDarkMode = darkModeToggle.checked;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.querySelector(".graph-area").classList.toggle("dark-mode", isDarkMode);
    document.querySelector(".sidebar").classList.toggle("dark-mode", isDarkMode);
});


const simulation = d3
	.forceSimulation()
	.force(
		"link",
		d3
			.forceLink()
			.id((d) => d.id)
			.distance(150)
	)
	.force("charge", d3.forceManyBody().strength(-300))
	.force("center", d3.forceCenter(width / 2, height / 2));

let nodes = [];
let links = [];
let history = [];
let redoStack = [];

// Helper Functions
function saveState() {
	history.push({
		nodes: JSON.parse(JSON.stringify(nodes)),
		links: JSON.parse(JSON.stringify(links)),
	});
	redoStack = [];
}

function searchNode() {
	const searchInput = document.getElementById("search-node").value.trim();
	const node = nodes.find((n) => n.id === Number(searchInput));

	// Reset previous highlights
	d3.selectAll(".node").classed("selected", false);

	if (node) {
		d3.select(`circle[node-id='${node.id}']`).classed("selected", true);
		alert(`Node ${node.id} found!`);
	} else {
		alert("Node not found!");
	}
}

// Add an event listener
document
	.getElementById("search-node-btn")
	.addEventListener("click", searchNode);

function undo() {
	if (history.length > 0) {
		redoStack.push({ nodes: nodes, links: links });
		const lastState = history.pop();
		nodes = lastState.nodes;
		links = lastState.links;
		updateGraph();
	}
}

function redo() {
	if (redoStack.length > 0) {
		history.push({ nodes, links });
		const nextState = redoStack.pop();
		nodes = nextState.nodes;
		links = nextState.links;
		updateGraph();
	}
}

function addNamedNode() {
	const nodeName = document.getElementById("node-name").value.trim();
	if (!nodeName) return alert("Please enter a valid node name!");

	saveState();
	const id = nodes.length + 1;
	nodes.push({ id, name: nodeName, x: width / 2, y: height / 2, owned: false });
	updateGraph();
}

// Add event listener
document
	.getElementById("add-named-node")
	.addEventListener("click", addNamedNode);

function addEdge() {
	saveState();
	if (nodes.length < 2) return alert("Add at least 2 nodes first.");
	const source = nodes[Math.floor(Math.random() * nodes.length)];
	const target = nodes[Math.floor(Math.random() * nodes.length)];
	if (source !== target) {
		links.push({ source, target, weight: Math.floor(Math.random() * 10) + 1 });
		updateGraph();
	}
}

function updateGraph() {
	const node = svg
		.selectAll(".node")
		.data(nodes, (d) => d.id)
		.join("circle")
		.attr("class", (d) => `node ${d.owned ? "owned" : ""}`)
		.attr("r", 15)
		.call(
			d3.drag().on("start", dragStart).on("drag", dragging).on("end", dragEnd)
		);

	// Add labels
	svg
		.selectAll(".node-label")
		.data(nodes, (d) => d.id)
		.join("text")
		.attr("class", "node-label")
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y)
		.attr("text-anchor", "middle")
		.attr("dy", -20)
		.text((d) => d.name || `Node ${d.id}`);
}

function addEdge() {
	const sourceId = prompt("Enter source node ID:");
	const targetId = prompt("Enter target node ID:");
	const weight = prompt("Enter edge weight (default is 1):") || 1;

	const source = nodes.find((n) => n.id === Number(sourceId));
	const target = nodes.find((n) => n.id === Number(targetId));

	if (!source || !target || source === target) {
		return alert("Invalid nodes selected. Please try again.");
	}

	saveState();
	links.push({ source, target, weight: Number(weight) });
	updateGraph();
}

// Add event listener (replace the old one)
document.getElementById("add-edge").addEventListener("click", addEdge);

// Event Listeners
document.getElementById("add-node").addEventListener("click", addNode);
document.getElementById("add-edge").addEventListener("click", addEdge);
document.getElementById("undo").addEventListener("click", undo);
document.getElementById("redo").addEventListener("click", redo);


function updateButtonStates() {
    document.getElementById("undo").disabled = history.length === 0;
    document.getElementById("redo").disabled = redoStack.length === 0;
}

// Toast notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
}

// Clear graph
document.getElementById("clear-graph").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the graph? This action cannot be undone.")) {
        nodes = [];
        links = [];
        updateGraph();
        showToast("Graph cleared successfully!");
    }
});

// Update button states after actions
saveState = function () {
    history.push({
        nodes: JSON.parse(JSON.stringify(nodes)),
        links: JSON.parse(JSON.stringify(links)),
    });
    redoStack = [];
    updateButtonStates();
};

document.getElementById("save-graph").addEventListener("click", () => {
    const button = document.getElementById("save-graph");
    button.classList.add("loading");
    saveGraph(nodes, links);
    button.classList.remove("loading");
    showToast("Graph saved successfully!");
});

updateButtonStates();  // Initialize button states
