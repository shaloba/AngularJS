__author__ = 'shaloba'
from flask import Flask, render_template, request, abort, session

app = Flask(__name__)
app.debug = True

@app.route('/teams')
def teams():

    # print request.args.get('user')
    # print request.args.get('name')
    return render_template("teams.html")


@app.route('/getPlayers', methods=['GET', 'POST'])
def get_teams():
    if request.method == 'GET':
        data = open('players.json', 'r+').read()
    else:
        data = abort(404)
    return data


@app.errorhandler(404)
def something_is_wrong(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run()
