# 
# @file scrape.py
# @author Scott Chu
# @date 2020-06-12
# 
print("working")
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
from random import randrange

req = Request('https://www.oberlo.ca/blog/motivational-quotes', headers={'User-Agent': 'Mozilla/5.0'})
uClient = urlopen(req)
webpage = uClient.read()
uClient.close()

webpage_soup = soup(webpage, "html.parser")
quotes = webpage_soup.findAll("li", {"style":"font-weight: 400;"})
container = []
		
for i in quotes:
	container.append(i.span.text)

for i in range(4):
	container.pop()
	
print(container[randrange(0, len(container) - 1)])
