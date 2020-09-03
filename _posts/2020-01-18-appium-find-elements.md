---
title: 'Appium: find elements and click'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

```python
# This is a script showcasing what are the different ways to find number 9-button on the calculator app on Android.
# These same principles can be used to find any element on a mobile app with Appium.
__author__ = "Iiro Alhonen"

import unittest
from time import sleep
from appium import webdriver


class LocalAppiumTest(unittest.TestCase):

    def setUp(self):
        # Desired Capabilities are needed for local runs unless you write code to fetch those details for you.
        desired_caps = {}
        desired_caps['platformName'] = 'Android'
        desired_caps['platformVersion'] = '8.1'  # Android version
        desired_caps['deviceName'] = 'Name of your device'
        desired_caps['udid'] = 'Device ID'  # Device id, can get it by running adb devices on the command line
        desired_caps['appPackage'] = 'com.google.android.calculator'
        desired_caps['appActivity'] = 'com.android.calculator2.Calculator'

        # Running your Appium server at 127.0.0.2:4723
        # You can change the address of your Appium server from the Appium Desktop GUI or with command line flags
        self.driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
        # Wait for the app to start
        sleep(10)

    def test_clickTheNumberNine(self):
        # Different ways to find the element
        # Element we're trying to find is the number '9' in the calculator app
        # Finding the element by id
        elem = self.driver.find_element_by_id(
            'com.google.android.calculator:id/digit_9')
        elem.click()
        # Finding the element by XPath examples
        # Using the elements id
        elem = self.driver.find_element_by_xpath(
            "//android.widget.Button[contains(@resource-id, 'digit_9')]")
        elem.click()
        # Using the text that the element has
        elem = self.driver.find_element_by_xpath(
            "//android.widget.Button[@text='9']")
        elem.click()
        # Double down!
        # You can combine different attributes with XPath
        elem = self.driver.find_element_by_xpath(
            "//android.widget.Button[contains(@resource-id, 'digit_9') and @text='9']")
        elem.click()
        elem = self.driver.find_element_by_xpath(
            "//android.widget.Button[@text='9' and @index='2']")
        elem.click()
        # XPath with parent/child hierarchy and indexes for elements
        elem = self.driver.find_element_by_xpath(
            '//android.widget.LinearLayout[@content-desc="Numbers and basic operations"]/android.view.ViewGroup[1]/android.widget.Button[3]')
        elem.click()
        # Finding the element by accessability id
        # Number 9 doesn't have and accessibility id, so we can use the delete-button for this example
        elem = self.driver.find_element_by_accessibility_id('delete')
        elem.click()
        # You can also use content-desc to find elements, number 9 doesn't have this, but the delete-button does
        elem = self.driver.find_element_by_xpath(
            '//android.widget.ImageButton[@content-desc="delete"]')
        elem.click()

    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(LocalAppiumTest)
    unittest.TextTestRunner(verbosity=2).run(suite)
```