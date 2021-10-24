FROM node:12.13-alpine As builder

ARG db_host=ec2-52-70-107-254.compute-1.amazonaws.com
ARG db_database=deiemsgb7hgvb2
ARG db_user=idbeoaxtotpqsd
ARG db_password=d73980ef438f1c6afe364dd4b0cfce90167aeefb88410a5f1e7fa0ef9de85e05

ARG PORT
ENV service_port=$PORT


WORKDIR /app
COPY . .
CMD ["npm", "install"]
#CMD ["npm", "build"]
CMD ["npm", "run", "start:dev"]


#FROM node:10-alpine
#WORKDIR /app
#COPY --from=builder /app ./
#EXPOSE $service_port
#CMD ["npm", "run", "start:prod"]
