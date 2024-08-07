class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, null)
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList.set(vertex1, new ListNode(vertex2, this.adjacencyList.get(vertex1)));
        this.adjacencyList.set(vertex2, new ListNode(vertex2, this.adjacencyList.get(vertex2)));
    }

    bfs(startingVertex) {
        const visited = new Set();
        const queue = [startingVertex];
        const result = [];

        visited.add(startingVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            let neighbors = this.adjacencyList.get(vertex);
            while (neighbors !== null) {
                if (!visited.has(neighbors.value)) {
                    visited.add(neighbors.value);
                    queue.push(neighbors.value);
                }
                neighbors = neighbors.next;
            }
        }

        return result;
    }

    bfsShortestPath(startingVertex, targetVertex) {
        if (!this.adjacencyList.has(startingVertex) || !this.adjacencyList.has(targetVertex)) {
          return null;
        }
    
        const visited = new Set();
        const queue = [[startingVertex]];
        visited.add(startingVertex);
    
        while (queue.length > 0) {
          const path = queue.shift();
          const vertex = path[path.length - 1];
    
          if (vertex === targetVertex) {
            return path;
          }
    
          let neighbors = this.adjacencyList.get(vertex);
          while (neighbors !== null) {
            if (!visited.has(neighbors.value)) {
              visited.add(neighbors.value);
              const newPath = path.slice();
              newPath.push(neighbors.value);
              queue.push(newPath);
            }
            neighbors = neighbors.next;
          }
        }
    
        return null; // No path found
      }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.bfs('A'));
console.log(graph.bfsShortestPath('A', 'E'));  