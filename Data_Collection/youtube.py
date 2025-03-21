import requests
import re

def get_youtube_videos(api_key, query, max_results=10):
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    
    params = {
        'part': 'snippet',
        'q': query + " travel",
        'type': 'video',
        'maxResults': max_results,
        'key': api_key,
        'relevanceLanguage': 'en'
    }
    
    response = requests.get(search_url, params=params)
    videos = response.json().get('items', [])
    
    return [video['snippet']['title'] for video in videos]

def get_location_details(api_key, title):
    geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json'
    
    params = {
        'address': title,
        'key': api_key
    }
    
    response = requests.get(geocode_url, params=params)
    location_data = response.json()
    
    if location_data['status'] == 'OK':
        results = location_data['results'][0]
        return {
            'formatted_address': results['formatted_address'],
            'latitude': results['geometry']['location']['lat'],
            'longitude': results['geometry']['location']['lng']
        }
    
    return None

# Main Execution
if __name__ == "__main__":
    youtube_api_key = 'AIzaSyAkZQIrRbOZGnUbPR-776t7UNAUEfwRE7Q'  # Replace with your YouTube API key
    google_maps_api_key = 'AIzaSyCTzMKKT4375afp0dLhBP3qir2GEOy3aYQ'  # Replace with your Google Maps API key
    
    query_location = input("Enter a generic location (e.g., Pune): ")
    
    print(f"\nSearching for travel-related videos about {query_location}...")
    video_titles = get_youtube_videos(youtube_api_key, query_location)
    
    for title in video_titles:
        print(f"\nVideo Title: {title}")
        location_details = get_location_details(google_maps_api_key, title)
        
        if location_details:
            print(f"Location: {location_details['formatted_address']}")
            print(f"Latitude: {location_details['latitude']}, Longitude: {location_details['longitude']}")
        else:
            print("Location not found.")
