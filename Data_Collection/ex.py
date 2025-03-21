import requests
import google.generativeai as genai

# Configure the Gemini API key
GEMINI_API_KEY = "AIzaSyAKGTupmfKWRhtOc2tQqimBBhpzEwLV4As"  # Replace with your actual key
genai.configure(api_key=GEMINI_API_KEY)

def scrape_youtube_travel_videos(api_key, query, max_results=20):
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    
    params = {
        'part': 'snippet',
        'q': query + " travel",
        'type': 'video',
        'maxResults': max_results,
        'key': api_key
    }
    
    response = requests.get(search_url, params=params)
    videos = response.json().get('items', [])
    
    # Extract titles and full descriptions
    video_data = []
    for video in videos:
        title = video['snippet']['title']
        description = video['snippet']['description']  # Full description as provided by the API
        video_data.append({'title': title, 'description': description})
    
    return video_data

# Function to extract location information using Gemini
def extract_location_info(text):
    model = genai.GenerativeModel("gemini-1.5-flash")  # Use the Flash model
    prompt = f"Extract specific location names or attractions (like beaches, waterfalls) from the following text:\n{text}"
    
    response = model.generate_content(prompt)
    return response.text.strip()

# Example usage
if __name__ == "__main__":
    youtube_api_key = 'AIzaSyAkZQIrRbOZGnUbPR-776t7UNAUEfwRE7Q'  # Replace with your YouTube API key
    query_location = input("Enter a generic location (e.g., Maharashtra): ")
    
    print(f"\nSearching for travel-related videos about {query_location}...")
    video_data = scrape_youtube_travel_videos(youtube_api_key, query_location)
    
    # Set to collect unique locations
    unique_locations = set()

    # Process each item in the scraped data
    for idx, video in enumerate(video_data, 1):
        print(f"\nVideo {idx}:")
        print(f"Title: {video['title']}")
        print(f"Description: {video['description']}")

        # Extract location information from title and description
        combined_text = f"{video['title']} {video['description']}"
        locations_extracted = extract_location_info(combined_text)

        if locations_extracted:
            unique_locations.update(locations_extracted.split(", "))  # Assuming response is comma-separated

    # Output unique locations
    print("\nExtracted Locations:", unique_locations)
