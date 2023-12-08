# Website Name: CodeVista Explorer

## Live Link Surge

- **Live Link:** [CodeVista Explorer](https://mahfuzrahman99.github.io/Assignment-Sixth/)

## Overview

-App fetches programming categories from Programming API, displaying selected video content with dynamic buttons for efficient learning.

## Features

1. **loadCategories Function:**
   -Fetches video categories from the specified API endpoint (https://openapi.programming-hero.com/api/videos/categories).
   -Dynamically creates buttons for each category and appends them to the HTML element with the ID "btn-container."
   -Each button is associated with the loadCards function, which loads video cards based on the selected category.

2. **loadCards Function:**
   -Fetches video cards for a specific category using the API endpoint (https://openapi.programming-hero.com/api/videos/category/${id}).
   -Dynamically creates and displays video cards based on the fetched data.
   -The convertTominTosec function is used to convert the duration of videos from seconds to a more readable format.
   -Supports sorting of video cards based on the number of views in ascending or descending order.
   -Updates the displayed cards when the "SORT BY" button is clicked.

3. **Sorting Functionality:**
   -Allows users to toggle between ascending and descending order of video cards based on the number of views.

4. **HTML Structure:**
   -The HTML structure consists of a header with navigation buttons, a main section with dynamically generated category buttons and video cards, and a footer..

5. **Event Listeners:**
   -Listens for the "SORT BY" button click to trigger sorting functionality.
   -Listens for the "blog" button click to navigate to a different page ("blog.html").

6. **Blog HTML Page:**
   -Contains content related to blog posts, including headings and paragraphs.
