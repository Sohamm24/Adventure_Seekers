import requests

def fetch_api_data(url):
    try:
        # Send a GET request to the specified URL
        response = requests.get(url)
        
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON data from the response
            data = response.json()
            return data
        else:
            print(f"Error: Received status code {response.status_code}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None

# Example usage
url = "https://api.apify.com/v2/datasets/oafh3bHa3EHL1uPzD/items?token=apify_api_18cjFpOb0OaglDrwSrBxJEgQSsNDh11IZB6f"
api_data = fetch_api_data(url)

if api_data is not None:
    print("Fetched Data:")
    for post in api_data:
        print(f"Title: {post['hashtags']}")
