from selenium import webdriver

url = 'http://boards.4chan.org/biz/catalog'
browser = webdriver.Chrome()
browser.get(url) 
browser.implicitly_wait(10)

for element in browser.find_elements_by_class_name('thumb'):
    print(element.get_attribute('src'))
browser.quit()