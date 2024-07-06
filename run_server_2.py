import http.server
import socketserver
import logging

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        logging.error(self.headers)
        http.server.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("", 8000), Handler) as httpd:
    print("serving at port", 8000)
    httpd.serve_forever()
