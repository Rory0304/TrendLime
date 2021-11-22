# ./Dockerfile 
FROM python:3.8-buster
WORKDIR /usr/src/app


## Install packages
RUN pip install django
COPY . /server
WORKDIR /server
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0:8000"]
