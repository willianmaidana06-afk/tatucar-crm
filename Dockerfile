# Dockerfile para o TatuCar CRM
FROM python:3.12-alpine

WORKDIR /app

# Copia os arquivos da aplicacao
COPY . /app

EXPOSE 3000
EXPOSE 8000

# Inicia o servidor do CRM e do Robo WhatsApp
CMD ["python", "-m", "http.server", "3000"]
