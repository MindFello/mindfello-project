# -----------------------------
# Stage 1: Build WAR
# -----------------------------
FROM gradle:8.10.2-jdk17 AS builder
WORKDIR /app

# Copy Gradle configs first (for caching)
COPY build.gradle.kts settings.gradle.kts ./
COPY gradle gradle

# Copy the source code
COPY src src

# Build the WAR
RUN gradle clean bootWar --no-daemon

# -----------------------------
# Stage 2: Run WAR in Tomcat
# -----------------------------
FROM tomcat:10.1-jdk17-temurin

ENV JAVA_HOME=/opt/java/openjdk
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Remove default ROOT and deploy WAR
RUN rm -rf /usr/local/tomcat/webapps/ROOT
COPY --from=builder /app/build/libs/*.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080
CMD ["catalina.sh", "run"]
