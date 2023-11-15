This README provides an overview of the Travel Blog website, including how to navigate the site, update content, and manage dependencies. The website is built using HTML, CSS, Flask, Docker, and IBM Db2.


### Technical Implementation Details

Frontend: HTML, CSS, JavaScript
Backend: Flask
Database: IBM DB2
Social Media Integration: Links to Facebook, Twitter, Pinterest, LinkedIn, and WhatsApp sharing 
mechanisms.
Mapping: Integration with Google Maps for location-related content
Hosting: Kubernetes


### Styling

To update the website's styling, navigate to the `static` directory, where CSS files are stored. You can modify the `style.css` file to change the site's appearance.


### Dependencies

- HTML and CSS: These are the fundamental languages used to structure and style the website.
- Flask: The website uses the Flask web framework to handle routing and backend logic.
- Docker: Docker is used for containerization and deployment, making it easy to run the website in various environments.
- IBM Db2: IBM Db2 is used to manage and store blog post data, including titles, content, images, and locations.
- Other Python libraries: The project relies on Python libraries, which are listed in the `requirements.txt` file and can be installed using `pip`.


### Local Development

1. Clone the repository to your local machine:
   shell
   git clone https://furqan-14.github.io/travelblog.github.io/
   
2. Navigate to the project directory:
   shell
   cd travel-blog-website
   
3. Install dependencies:
   shell
   pip install -r requirements.txt
   
4. Ensure you have Docker installed and running.

5. Run the website locally using Docker:
   shell
   docker build -t travel-blog-website .
   docker run -p 5000:5000 travel-blog-website
   
6. Access the website in your web browser at `http://localhost:5000`.


### Online Deployment

The website is also deployed online, and you can access it by visiting https://furqan-14.github.io/travelblog.github.io/
