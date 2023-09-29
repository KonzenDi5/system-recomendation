from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth
from firebase_admin import firestore

#  credenciais do Firebase (serviceAccountKey.json)
cred = credentials.Certificate("banco-cool-tea-firebase-adminsdk-wibfa-9b12b6c10f.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
app = Flask(__name__)

def calcular_somatorio_respostas(respostas):
    # Calcular o somatório total das respostas
    somatorio = sum(respostas.values())
    return somatorio

def decidir_trilha(somatorio):
    # Lógica para decidir a melhor trilha com base no somatório
    if somatorio <= 10:
        return "Trilha Iniciante"
    elif somatorio <= 20:
        return "Trilha Intermediária"
    else:
        return "Trilha Avançada"

def obter_respostas_usuario(uid):
    # Recuperando as respostas do usuário do Firestore usando o UID
    doc_ref = db.collection("usuarios").document(uid)
    doc = doc_ref.get()
    
    if doc.exists:
        data = doc.to_dict()
        if "answers" in data:
            return data["answers"]
    
    return {}

@app.route('/trail', methods=['POST'])
def calcular_trilha():
    # Obtendo o token de autorização do cabeçalho da solicitação
    authorization_header = request.headers.get('Authorization')
    
    if not authorization_header:
        return jsonify({"message": "Token de autorização não fornecido"}), 401
    
    try:
        # Verificando o token e obtendo o UID do usuário autenticado
        decoded_token = auth.verify_id_token(authorization_header)
        uid = decoded_token['uid']
        
        # Usando o UID para obter as respostas do usuário do Firestore
        respostas = obter_respostas_usuario(uid)
        
        if respostas:
            somatorio = calcular_somatorio_respostas(respostas)
            trilha_recomendada = decidir_trilha(somatorio)
            return jsonify({"somatorio": somatorio, "trilha_recomendada": trilha_recomendada}), 200
        else:
            return jsonify({"message": "Não foi possível obter as respostas do usuário"}), 404
        
    except Exception as e:
        return jsonify({"message": str(e)}), 401

if __name__ == "__main__":
    app.run(debug=True)
