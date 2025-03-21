import google.generativeai as genai

# Configure the API key
GEMINI_API_KEY = "AIzaSyAKGTupmfKWRhtOc2tQqimBBhpzEwLV4As"  # Replace with your actual key
genai.configure(api_key=GEMINI_API_KEY)

# Function to extract location names using Gemini
def extract_location_names(data):
    model = genai.GenerativeModel("gemini-1.5-flash")  # Choose the appropriate model
    prompt = f"Extract all location names from the following text:\n{data}"
    
    response = model.generate_content(prompt)
    return response.text

# Example scraped data
scraped_data = [
    {"title": "Exploring Paris: A Guide to the City", "description": "Visit the best spots in Paris."},
    {"title": "Top 10 Attractions in New York", "description": "Discover New York's iconic landmarks."}
]

# Set to collect unique locations
unique_locations = set()

# Process each item in the scraped data
for item in scraped_data:
    title_locations = extract_location_names(item['title'])
    description_locations = extract_location_names(item['description'])
    
    # Add extracted locations to the set
    unique_locations.update(title_locations.split(", "))  # Assuming response is comma-separated
    unique_locations.update(description_locations.split(", "))  # Assuming response is comma-separated

# Output unique locations
print("Extracted Locations:", unique_locations)
