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

#ingress controller 설치 필요
#kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/baremetal/deploy.yaml

# Deployment 삭제
#kubectl delete deployment forlink-frontend forlink-member-deployment forlink-nation-deployment

# Service 삭제 (kubernetes service는 제외)
#kubectl delete service forlink-frontend-service forlink-member-service forlink-nation-service

# Ingress 삭제
#kubectl delete ingress forlink-ingress

#docker build -t forlink-frontend:latest .
#kubectl apply -f forlink-frontend-deployment.yaml
#kubectl apply -f forlink-frontend-service.yaml
#kubectl apply -f forlink-frontend-ingress.yaml