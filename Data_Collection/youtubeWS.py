import requests
from bs4 import BeautifulSoup

# URL of the YouTube video to scrape
url = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'  # Replace YOUR_VIDEO_ID with the actual video ID

# Send a GET request to fetch the HTML content
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content with Beautiful Soup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Scrape the title
    title = soup.find('h1', class_='title style-scope ytd-video-primary-info-renderer').text.strip()

    # Scrape the description
    description = soup.find('yt-formatted-string', class_='content style-scope ytd-video-secondary-info-renderer').text.strip()

    # Print the results
    print(f'Title: {title}')
    print(f'Description: {description}')
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
