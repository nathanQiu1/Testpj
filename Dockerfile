FROM hub.c.163.com/nce2/nodejs:0.12.2
MAINTAINER nathan_qiu@jabil.com


# Copy project files and change working directory
RUN mkdir -p /src

COPY . /src
WORKDIR /src

# Expose container port
EXPOSE 1337

# Install npm dependencies and run application
RUN npm install
CMD [ "npm", "start" ]