import http.server
import socket
import socketserver
import os
import sys

PORT = 5000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, 'dist')

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

class SPAServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

    def do_GET(self):
        req_path = self.translate_path(self.path)
        if not os.path.exists(req_path) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_GET()

def run():
    if not os.path.exists(DIST_DIR):
        print(f"[!] Erreur : Le dossier '{DIST_DIR}' n'existe pas.")
        input("Appuyez sur Entree pour quitter...")
        sys.exit(1)

    ip = get_local_ip()
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(('0.0.0.0', PORT), SPAServerHandler) as httpd:
            print("=" * 62)
            print("       SERVEUR DU PORTFOLIO DEMARRE (SANS NPM)")
            print("=" * 62)
            print(f"  Sur ce PC :")
            print(f"    --> http://localhost:{PORT}")
            print()
            print(f"  Sur votre TELEPHONE ou AUTRE PC (sur le meme Wi-Fi) :")
            print(f"    --> http://{ip}:{PORT}")
            print("=" * 62)
            print("  Astuce : Ouvrez le navigateur sur votre telephone et")
            print(f"  tapez exactement : http://{ip}:{PORT}")
            print("  (Pour arreter le serveur : faites Ctrl + C)")
            print("=" * 62)
            httpd.serve_forever()
    except OSError as e:
        print(f"[!] Erreur de demarrage (le port {PORT} est peut-etre deja utilise) : {e}")

if __name__ == '__main__':
    run()
