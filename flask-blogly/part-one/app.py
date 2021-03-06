"""Blogly application."""

from flask import Flask, request, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "1234567"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


@app.route("/")
def root():
    """Homepage that redirects to a list of all Users"""
    return redirect("users")


@app.route("/users")
def users_index():
    """Shows a list of all Users"""
    users = User.query.order_by(User.last_name, User.first_name).all()
    return render_template('users/index.html', users=users)


@app.route("/users/new", methods=["GET"])
def users_new_form():
    """Shows a form to create a new user"""
    return render_template('users/new.html')


@app.route("/users/new", methods=["POST"])
def users_new():
    """Uses form submission for creating a new user"""
    new_user = User(first_name=request.form["first_name"],
                    last_name=request.form["last_name"],
                    image_url=request.form["image_url"] or None)

    db.session.add(new_user)
    db.session.commit()
    # do not render template as it duplicates the user
    return redirect("/users")


@app.route("/users/<int:user_id>")
def show_user(user_id):
    """Show details about a single user"""
    user = User.query.get_or_404(user_id)
    return render_template('users/show.html', user=user)


@app.route('/users/<int:user_id>')
def users_show(user_id):
    """Show a page with info on a specific user"""

    user = User.query.get_or_404(user_id)
    return render_template('users/show.html', user=user)


@app.route('/users/<int:user_id>/edit')
def users_edit(user_id):
    """Show a form to edit an existing user"""

    user = User.query.get_or_404(user_id)
    return render_template('users/edit.html', user=user)


@app.route('/users/<int:user_id>/edit', methods=["POST"])
def users_update(user_id):
    """Handle form submission for updating an existing user"""

    user = User.query.get_or_404(user_id)
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.image_url = request.form['image_url']

    db.session.add(user)
    db.session.commit()

    return redirect("/users")


@app.route('/users/<int:user_id>/delete', methods=["POST"])
def users_destroy(user_id):
    """Handle form submission for deleting an existing user"""

    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()

    return redirect("/users")
