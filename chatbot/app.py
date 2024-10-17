from flask import Flask, request, render_template, jsonify

app = Flask(__name__)
import sqlite3

# Fonction pour se connecter à la base de données SQLite
def get_db_connection():
    conn = sqlite3.connect('database.db')  # Nom de la base de données
    conn.row_factory = sqlite3.Row         # Pour que les résultats soient accessibles par nom de colonne
    return conn
# Créer la table si elle n'existe pas déjà
def init_db():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS ratings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            rating INTEGER NOT NULL,
            comment TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ''')
    conn.commit()
    conn.close()

# Appeler cette fonction au démarrage pour initialiser la base de données
init_db()

# Route pour afficher la page du chatbot
@app.route('/')
def home():
    return render_template('index.html')

import logging

from datetime import datetime
import pytz

@app.route('/save-rating', methods=['POST'])
def save_rating():
    data = request.json
    rating = data.get('rating')
    comment = data.get('comment', '')  # Commentaire facultatif

    if not rating:
        return jsonify({'error': 'Note manquante'}), 400

    # Obtenir l'heure actuelle au fuseau horaire de Paris
    paris_tz = pytz.timezone('Europe/Paris')
    paris_time = datetime.now(paris_tz).strftime('%Y-%m-%d %H:%M:%S')

    # Sauvegarde dans la base de données avec la date/heure ajustée
    conn = get_db_connection()
    conn.execute('INSERT INTO ratings (rating, comment, created_at) VALUES (?, ?, ?)', (rating, comment, paris_time))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Note sauvegardée avec succès'})



@app.route('/view-ratings')
def view_ratings():
    conn = get_db_connection()
    ratings = conn.execute('SELECT * FROM ratings').fetchall()
    conn.close()

    # Convertir en format JSON pour un affichage facile
    ratings_list = [{'id': row['id'], 'rating': row['rating'], 'comment': row['comment'], 'created_at': row['created_at']} for row in ratings]
    
    return jsonify(ratings_list)




if __name__ == '__main__':
    app.run(debug=True)
