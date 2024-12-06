export function bfs(startNode, nodes, links, updateCallback, completionCallback) {
    const queue = [startNode];
    const visited = new Set();
    visited.add(startNode.id);
  
    // Helper function to find neighbors
    const getNeighbors = (node) =>
      links
        .filter(link => link.source.id === node.id || link.target.id === node.id)
        .map(link => (link.source.id === node.id ? link.target : link.source));
  
    function step() {
      if (queue.length === 0) {
        // Animation complete
        if (completionCallback) completionCallback();
        return;
      }
  
      const current = queue.shift();
      const neighbors = getNeighbors(current).filter(n => !visited.has(n.id));
  
      neighbors.forEach(neighbor => {
        visited.add(neighbor.id);
        queue.push(neighbor);
      });
  
      // Update the graph (e.g., highlight visited node and edges)
      if (updateCallback) updateCallback(current, neighbors);
  
      // Recursively call the next step after a delay
      setTimeout(step, 500); // Adjust delay for animation speed
    }
  
    step();
  }
  

export function dfs(startNode, nodes, links, updateCallback, completionCallback) {
    const stack = [startNode];
    const visited = new Set();
    visited.add(startNode.id);

    const getNeighbors = (node) =>
        links
            .filter(link => link.source.id === node.id || link.target.id === node.id)
            .map(link => (link.source.id === node.id ? link.target : link.source));

    function step() {
        if (stack.length === 0) {
            // Animation complete
            if (completionCallback) completionCallback();
            return;
        }

        const current = stack.pop();
        const neighbors = getNeighbors(current).filter(n => !visited.has(n.id));

        neighbors.forEach(neighbor => {
            visited.add(neighbor.id);
            stack.push(neighbor);
        });

        // Update the graph (e.g., highlight visited node and edges)
        if (updateCallback) updateCallback(current, neighbors);

        // Recursively call the next step after a delay
        setTimeout(step, 500); // Adjust delay for animation speed
    }

    step();
}

export function dijkstra(startNode, nodes, links, updateCallback, completionCallback) {
    const distances = {};
    const previous = {};
    const unvisited = new Set(nodes);

    nodes.forEach(node => {
        distances[node.id] = node.id === startNode.id ? 0 : Infinity;
        previous[node.id] = null;
    });

    function getNeighbors(node) {
        return links
            .filter(link => link.source.id === node.id || link.target.id === node.id)
            .map(link => {
                const neighbor = link.source.id === node.id ? link.target : link.source;
                return { neighbor, weight: link.weight || 1 };
            });
    }

    function step() {
        if (unvisited.size === 0) {
            // Animation complete
            if (completionCallback) completionCallback(distances, previous);
            return;
        }

        const currentNode = Array.from(unvisited).reduce((minNode, node) =>
            distances[node.id] < distances[minNode.id] ? node : minNode
        );

        unvisited.delete(currentNode);

        const neighbors = getNeighbors(currentNode);
        neighbors.forEach(({ neighbor, weight }) => {
            if (!unvisited.has(neighbor)) return;

            const altDistance = distances[currentNode.id] + weight;
            if (altDistance < distances[neighbor.id]) {
                distances[neighbor.id] = altDistance;
                previous[neighbor.id] = currentNode.id;
            }
        });

        // Update the graph (e.g., highlight current node and edges)
        if (updateCallback) updateCallback(currentNode, neighbors);

        // Recursively call the next step after a delay
        setTimeout(step, 500); // Adjust delay for animation speed
    }

    step();
}
