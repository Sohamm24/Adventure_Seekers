import requests

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

# Example usage
if __name__ == "__main__":
    youtube_api_key = 'AIzaSyAkZQIrRbOZGnUbPR-776t7UNAUEfwRE7Q'  # Replace with your YouTube API key
    query_location = input("Enter a generic location (e.g., Maharashtra): ")
    
    print(f"\nSearching for travel-related videos about {query_location}...")
    video_data = scrape_youtube_travel_videos(youtube_api_key, query_location)
    
    for idx, video in enumerate(video_data, 1):
        print(f"\nVideo {idx}:")
        print(f"Title: {video['title']}")
        print(f"Description: {video['description']}")
