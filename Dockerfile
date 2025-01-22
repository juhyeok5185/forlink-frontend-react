# 1. Base image
FROM nginx:latest

# 2. Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# 3. Copy build files
COPY dist/ /usr/share/nginx/html/

# 4. Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 5. Expose port
EXPOSE 80

# 6. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
