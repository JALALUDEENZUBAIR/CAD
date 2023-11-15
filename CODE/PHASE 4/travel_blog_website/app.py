from flask import Flask, render_template
import ibm_db

app = Flask(__name__)

def get_posts_from_db():
    conn = ibm_db.connect("DATABASE=bludb;HOSTNAME=b0aebb68-94fa-46ec-a1fc-1c999edb6187.c3n41cmd0nqnrk39u98g.databases.appdomain.cloud;PORT=31249;UID=qvm12834;PWD=y6HwghDRDHiUlF1f;", "", "")
    stmt = ibm_db.exec_immediate(conn, "SELECT * FROM posts")
    posts = []
    while ibm_db.fetch_row(stmt):
        post = {
            "heading": ibm_db.result(stmt, "HEADING"),
            "location": ibm_db.result(stmt, "LOCATION"),
            "image_url": ibm_db.result(stmt, "IMAGE_URL"),
            "content": ibm_db.result(stmt, "CONTENT"),
        }
        posts.append(post)
    ibm_db.close(conn)
    return posts

@app.route('/')
def index():
    posts = get_posts_from_db()
    return render_template('index.html', posts=posts)

@app.route('/post/<int:post_id>')
def view_post(post_id):
    conn = ibm_db.connect("DATABASE=bludb;HOSTNAME=b0aebb68-94fa-46ec-a1fc-1c999edb6187.c3n41cmd0nqnrk39u98g.databases.appdomain.cloud;PORT=31249;UID=qvm12834;PWD=y6HwghDRDHiUlF1f;", "", "")
    stmt = ibm_db.prepare(conn, "SELECT * FROM posts WHERE ID = ?")
    ibm_db.bind_param(stmt, 1, post_id)
    if ibm_db.execute(stmt):
        row = ibm_db.fetch_assoc(stmt)
        ibm_db.close(conn)
        if row:
            post = {
                "heading": row["HEADING"],
                "location": row["LOCATION"],
                "image_url": row["IMAGE_URL"],
                "content": row["CONTENT"],
            }
            return render_template('post.html', post=post)
    return "Post not found"

if __name__ == '__main__':
    app.run(debug=True)
