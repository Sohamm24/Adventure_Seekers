const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Expanded graph representing tourist locations and their weights based on budget and age suitability
const graph = {
    'Beach': {'Mountain': 10, 'Park': 5, 'Museum': 20, 'Waterfall': 25},
    'Mountain': {'Beach': 10, 'Park': 15, 'Museum': 25, 'Trek': 10, 'Waterfall': 15},
    'Park': {'Beach': 5, 'Mountain': 15, 'Museum': 10, 'Safari': 20, 'Waterfall': 7},
    'Museum': {'Beach': 20, 'Mountain': 25, 'Park': 10, 'Old Architecture': 10, 'Fort': 15},
    'Trek': {'Mountain': 10, 'Jungle': 8, 'Safari': 15},
    'Fort': {'Old Architecture': 5, 'Religious Place': 7, 'Museum': 15},
    'Old Architecture': {'Museum': 10, 'Religious Place': 8, 'Fort': 5},
    'Religious Place': {'Old Architecture': 8, 'Fort': 7, 'Park': 12},
    'Safari': {'Jungle': 5, 'Park': 20, 'Trek': 15},
    'Jungle': {'Safari': 5, 'Trek': 8, 'Waterfall': 10},
    'Waterfall': {'Jungle': 10, 'Mountain': 15, 'Park': 7}
};

// Age group suitability weights (lower is better)
const ageGroupWeights = {
    "Children": {"Beach": 1, "Mountain": 3, "Park": 1,
                 "Museum": 3,"Waterfall":2,
                 "Trek":4,"Fort":3,
                 "Old Architecture":3,
                 "Religious Place":2,
                 "Safari":4,
                 "Jungle":4},

    "Teens": {"Beach":1,"Mountain":1,
              "Park":3,"Museum":2,
              "Waterfall" :2,"Trek" :1,
              "Fort" :3,"Old Architecture" :2,
              "Religious Place" :3,"Safari" :1,
              "Jungle" :1},

    "Adults" : {"Beach" :1,"Mountain" :2,
                "Park" :1,"Museum" :1,
                "Waterfall" :1,"Trek" :2,
                "Fort" :1,"Old Architecture" :1,
                "Religious Place" :1,"Safari" :2,
                "Jungle" :2},

    "Seniors": {"Beach" :2,"Mountain" :4,
                "Park" :1,"Museum" :1,
                "Waterfall" :2,"Trek" :5,
                "Fort" :5,"Old Architecture" :2,
                "Religious Place" :2,"Safari" :4,
                "Jungle" :4}
};

// Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    push(priority, value) {
        this.queue.push({ priority, value });
        this.queue.sort((a, b) => a.priority - b.priority); // Sort by priority
    }

    pop() {
        return this.queue.shift(); // Remove and return the first element
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Function to calculate the adjusted weights based on age group and budget
function adjustWeights(graph, ageGroup, budget) {
    const adjustedGraph = {};

    for (const location in graph) {
        adjustedGraph[location] = {};
        for (const neighbor in graph[location]) {
            const baseWeight = graph[location][neighbor];
            const ageWeight = ageGroupWeights[ageGroup][neighbor];
            let totalWeight = baseWeight + ageWeight;

            if (totalWeight > budget) {
                totalWeight = Infinity; // If it exceeds budget
            }

            adjustedGraph[location][neighbor] = totalWeight;
        }
    }

    return adjustedGraph;
}

// Dijkstra's algorithm implementation
function dijkstra(graph, start) {
    const distances = {};
    const priorityQueue = new PriorityQueue();

    for (const node in graph) {
        distances[node] = Infinity;
    }
    
    distances[start] = 0;
    priorityQueue.push(0, start);

    while (!priorityQueue.isEmpty()) {
        const { value: currentNode } = priorityQueue.pop();
        const currentDistance = distances[currentNode];

        for (const neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor];
            const distance = currentDistance + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                priorityQueue.push(distance, neighbor);
            }
        }
    }

    return distances;
}

// Function to provide text-based recommendations based on numeric values (weights)
function generateRecommendations(shortestPaths) {
    const recommendations = {};

    for (const location in shortestPaths) {
        const cost = shortestPaths[location];

        if (cost < Infinity) {
            if (cost <= 10) {
                recommendations[location] = `${location} is highly recommended. It is very accessible and affordable.`;
            } else if (cost <= 20) {
                recommendations[location] = `${location} is a good option. Slightly more effort or cost required.`;
            } else {
                recommendations[location] = `${location} is accessible but may require significant effort or cost.`;
            }
        } else {
            recommendations[location] = `${location} is not suitable within your budget.`;
        }
    }

    return recommendations;
}

// Main function to get user input and run the algorithm
app.post('/recommend', (req, res) => {
    const { ageGroup, budget } = req.body;

    if (!ageGroup || !budget || typeof budget !== 'number' || budget < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a valid age group and a non-negative budget.' });
    }

    const adjustedGraph = adjustWeights(graph, ageGroup, budget);
    
    const startLocation = req.body.startLocation || 'Beach'; // Default starting location
    const shortestPaths = dijkstra(adjustedGraph, startLocation);

    const recommendations = generateRecommendations(shortestPaths);
    
    res.json({ recommendations });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
