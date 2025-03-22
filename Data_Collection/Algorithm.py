import heapq

# Expanded graph representing tourist locations and their weights based on budget and age suitability
graph = {
    'Beach': {'Mountain': 10, 'Park': 5, 'Museum': 20, 'Waterfall': 25},
    'Mountain': {'Beach': 10, 'Park': 15, 'Museum': 25, 'Trek': 10, 'Waterfall': 15},
    'Park': {'Beach': 5, 'Mountain': 15, 'Museum': 10, 'Safari': 20, 'Waterfall': 7},
    'Museum': {'Beach': 20, 'Mountain': 25, 'Park': 10, 'Old Architecture': 10, 'Fort': 15},
    
    # New nodes with connections
    'Trek': {
        'Mountain': 10, 
        'Jungle': 8, 
        'Safari': 15
    },
    'Fort': {
        'Old Architecture': 5, 
        'Religious Place': 7, 
        'Museum': 15
    },
    'Old Architecture': {
        'Museum': 10, 
        'Religious Place': 8, 
        'Fort': 5
    },
    'Religious Place': {
        'Old Architecture': 8, 
        'Fort': 7, 
        'Park': 12
    },
    'Safari': {
        'Jungle': 5, 
        'Park': 20, 
        'Trek': 15
    },
    'Jungle': {
        'Safari': 5, 
        'Trek': 8, 
        'Waterfall': 10
    },
    'Waterfall': {
        'Jungle': 10, 
        'Mountain': 15, 
        'Park': 7
    }
}

# Age group suitability weights (lower is better)
age_group_weights = {
    # Adjusted weights for new locations
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
}

# Function to calculate the adjusted weights based on age group and budget
def adjust_weights(graph, age_group, budget):
    adjusted_graph = {}
    
    for location in graph:
        adjusted_graph[location] = {}
        for neighbor in graph[location]:
            # Base weight from the graph
            base_weight = graph[location][neighbor]
            # Age group weight adjustment
            age_weight = age_group_weights[age_group][neighbor]
            # Total weight considering budget (assuming budget limits are scaled)
            total_weight = base_weight + age_weight
            
            # Adjust total weight based on user budget (higher budget can reduce effective weight)
            if total_weight > budget:
                total_weight = float('inf') # If it exceeds budget
            
            adjusted_graph[location][neighbor] = total_weight
    
    return adjusted_graph

# Dijkstra's algorithm implementation
def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    priority_queue = [(0, start)]

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances

# Function to provide text-based recommendations based on numeric values (weights)
def generate_recommendations(shortest_paths):
    recommendations = {}
    
    for location in shortest_paths:
        cost = shortest_paths[location]
        
        if cost < float('inf'):
            if cost <= 10:
                recommendations[location] = f"{location} is highly recommended. It is very accessible and affordable."
            elif cost <= 20:
                recommendations[location] = f"{location} is a good option. Slightly more effort or cost required."
            else:
                recommendations[location] = f"{location} is accessible but may require significant effort or cost."
        else:
            recommendations[location] = f"{location} is not suitable within your budget."
    
    return recommendations

# Main function to get user input and run the algorithm
def main():
    # User input for age group and budget
    age_group = input("Enter your age group (Children/Teens/Adults/Seniors): ")
    
    # Input validation for budget to ensure it's a number
    while True:
        try:
            budget = int(input("Enter your budget (as a numeric value): "))
            if budget < 0:
                raise ValueError("Budget cannot be negative.")
            break
        except ValueError as e:
            print(f"Invalid input: {e}. Please enter a valid numeric value.")
    
    # Adjust weights based on user input
    adjusted_graph = adjust_weights(graph, age_group,budget)
    
    # Run Dijkstra's algorithm from a starting location (e.g., Beach)
    start_location = input("Enter your starting location (Beach/Mountain/Park/Museum/Trek/Fort/Old Architecture/Religious Place/Safari/Jungle/Waterfall): ")
    
    shortest_paths = dijkstra(adjusted_graph, start_location)

    print("\nRecommended Tourist Locations Based on Your Input:")
    
    # Generate text-based recommendations based on numeric values
    recommendations = generate_recommendations(shortest_paths)
    
    for location in recommendations:
        print(recommendations[location])

if __name__ == "__main__":
    main()
