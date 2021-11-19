FROM python:3.8-buster
RUN pip install django
COPY . /server
WORKDIR /server
RUN pip install -r requirements.txt
CMD ["python3", "manage.py", "runserver", "0:8000"]
