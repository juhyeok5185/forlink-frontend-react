FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#전부 삭제
#kubectl delete deployments --all --all-namespaces

#ingress controller 설치 필요
#kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/baremetal/deploy.yaml

#kubectl delete deployment forlink-frontend
#kubectl delete service forlink-frontend-service
#docker build -t forlink-frontend:latest .
#kubectl apply -f forlink-frontend-deployment.yaml
#kubectl apply -f forlink-frontend-service.yaml
#kubectl apply -f forlink-frontend-ingress.yaml